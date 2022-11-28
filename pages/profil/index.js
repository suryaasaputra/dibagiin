import Head from 'next/head';
import Swal from "sweetalert2";
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from 'next/image';
import Layout2 from '../../components/Layout2';
import { userService } from '../../services';
import API_ENDPOINT from '../../globals/api-endpoint';


const Profil = () => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        setUserData(user)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const router = useRouter();

    // form validation rules
    const validationSchema = Yup.object().shape({
        full_name: Yup.string().required("Nama lengkap tidak boleh kosong"),
        email: Yup.string()
            .email("Alamat email tidak valid")
            .required("Email tidak boleh kosong"),
        phone_number: Yup.string()
            .required("Nomor Whatsapp tidak boleh kosong")
            .test({
                skipAbsent: true,
                test(value, ctx) {
                    if (!value.startsWith('+62')) {
                        return ctx.createError({ message: 'Nomor whatsapp tidak valid, contoh:+628xxx' })
                    }
                    if (value.length < 12) {
                        return ctx.createError({ message: 'Nomor whatsapp tidak valid' })
                    }
                    return true
                }
            }),
        gender: Yup.string().required("Jenis kelamin tidak boleh kosong"),
        address: Yup.string().required("Alamat tidak boleh kosong"),
    })
    const formOptions = { resolver: yupResolver(validationSchema) }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;
    // submit data from form value
    function onSubmit(data) {
        let oldData = JSON.parse(localStorage.getItem("user"));
        const newData = {
            id: oldData.id,
            email: data.email,
            user_name: oldData.user_name,
            full_name: data.full_name,
            profil_photo_url: oldData.profil_photo_url,
            token: oldData.token
        }
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(newData));
        // console.log(data);
        return userService
            .editProfile(userData.user_name, data)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil Memperbarui Data",
                    confirmButtonColor: "#73a700",
                    timer: 2000,
                }).then((result) => {
                    if (result.isConfirmed) {
                        router.push("/profil");
                    } else if (result.isDenied) {
                        router.push("/profil");
                    } else if (result.isDismissed) {
                        router.push("/profil");
                    }
                });
            })
            .catch((error) => {
                setError("apiError", { message: error });
            });
    }
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);


    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    function uploadToServer(event) {
        ;
        const body = new FormData();
        body.append("profil_photo", image);
        return userService
            .setProfilPhoto(userData.user_name, body).then((r) => {
                console.log(r);
                const oldData = JSON.parse(localStorage.getItem("user"));
                const newData = {
                    id: oldData.id,
                    email: oldData.email,
                    user_name: oldData.user_name,
                    full_name: oldData.full_name,
                    profil_photo_url: r.data.profil_photo_url,
                    token: oldData.token
                };
                localStorage.removeItem("user");
                localStorage.setItem("user", JSON.stringify(newData));
            })
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil Memperbarui Data",
                    confirmButtonColor: "#73a700",
                    timer: 2000,
                }).then((result) => {
                    if (result.isConfirmed) {
                        router.push("/profil");
                    } else if (result.isDenied) {
                        router.push("/profil");
                    } else if (result.isDismissed) {
                        router.push("/profil");
                    }
                });
            })
            .catch((error) => {
                setError("apiError", { message: error });
            });
    };
    const { user, isLoading } = userService.getUser(userData.user_name);
    if (isLoading) return <div>loading...</div>
    if (user.error) {
        return (
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    {user.message}
                </div>
            </div>
        )
    };

    return (
        <>
            <Head>
                <title>Profil</title>
            </Head>
            <div className="mt-5 pt-3 beranda">
                <div className="container-fluid">

                    <div className="row mt-3 mb-3 p-1">
                        <div className='col-md-6 card-user'>
                            <div className='img-user'>
                                <h2>{user.data.full_name}</h2>
                                <Image
                                    src={user.data.profil_photo_url}
                                    width={150}
                                    height={150}
                                    className="logo-text img-fluid rounded-2"
                                    alt="profil-photo"
                                >
                                </Image>
                                <button className='btn' data-bs-toggle="modal" data-bs-target="#uploadPhoto"><i className="fa-solid fa-pen-to-square">Ganti Photo Profil</i></button>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="info-user">
                                <h2>Info : </h2>
                                <p><i className='fa fa-envelope'></i> {user.data.email}</p>
                                <p><i className='fab fa-whatsapp'></i> {user.data.phone_number}</p>
                                <p><i className='fa fa-user'></i> {user.data.gender}</p>
                                <p><i className="fa-solid fa-map-location-dot"></i> {user.data.address}</p>
                                <a href='/beranda' className='btn-style outer-shadow inner-shadow hover-in-shadow '>  <i className='fa fa-arrow-left'></i> Kembali</a>
                                <button style={{ border: 'none' }} className='btn-style outer-shadow inner-shadow hover-in-shadow  ms-2' data-bs-toggle="modal" data-bs-target="#editProfil"> <i className="fa-solid fa-pen-to-square"></i> Edit Profile</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="modal fade" id="editProfil" tabIndex="-1" aria-labelledby="editProfilForm" aria-hidden="true">
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Profil</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label htmlFor="full_name" className="form-label">
                                        Nama Lengkap*
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.full_name ? "is-invalid" : ""
                                            }`}
                                        id="full_name"
                                        placeholder="Raisa Andriana"
                                        {...register("full_name")}

                                        defaultValue={user.data.full_name}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.full_name?.message}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">
                                        Email*
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        id="email"
                                        aria-describedby="emailHelp"
                                        placeholder="raisa@gmail.com"
                                        {...register("email")}
                                        defaultValue={user.data.email}
                                    />
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="user_name" className="form-label">
                                        Username*
                                    </label>
                                    <input
                                        type="username"
                                        className={`form-control ${errors.user_name ? "is-invalid" : ""
                                            }`}
                                        id="user_name"
                                        aria-describedby="usernameHelp"
                                        placeholder="raisa6690"
                                        {...register("user_name")}
                                        defaultValue={user.data.user_name}
                                        disabled
                                    />
                                    <div className="invalid-feedback">
                                        {errors.user_name?.message}
                                    </div>
                                </div>
                                <div className="mb-4  ">
                                    <label htmlFor="phone_number" className="form-label">
                                        No. WhatsApp*
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.phone_number ? "is-invalid" : ""
                                            }`}
                                        id="phone_number"
                                        placeholder="+628123468798"
                                        {...register("phone_number")}
                                        defaultValue={user.data.phone_number}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.phone_number?.message}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="gender" className="form-label">
                                        Jenis Kelamin*
                                    </label>
                                    <select
                                        className={`form-select ${errors.gender ? "is-invalid" : ""}`}
                                        id="gender"
                                        aria-label="Default select example"
                                        {...register("gender")}
                                    >
                                        <option value="pria">Pria</option>
                                        <option value="wanita">Wanita</option>
                                    </select>
                                    <div className="invalid-feedback">{errors.gender?.message}</div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">
                                        Alamat*
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.address ? "is-invalid" : ""
                                            }`}
                                        id="address"
                                        placeholder="Jl. Garuda No. 76 Jakarta Selatan"
                                        {...register("address")}
                                        defaultValue={user.data.address}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.address?.message}
                                    </div>
                                </div>

                                <div className="d-grid mt-5">
                                    <button
                                        disabled={formState.isSubmitting}
                                        type="submit"
                                        className="btn btn-login"
                                        data-bs-dismiss="modal"
                                    >
                                        {formState.isSubmitting && (
                                            <span className="spinner-border spinner-border-sm mr-1"></span>
                                        )}
                                        Simpan
                                    </button>
                                </div>
                                {errors.apiError && (
                                    <div className="alert alert-danger mt-3 mb-0">
                                        {errors.apiError?.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="uploadPhoto" tabIndex="-1" aria-labelledby="uploadPhotoForm" aria-hidden="true">
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ganti Photo Profil</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <img src={createObjectURL} className="img-fluid" />
                                <label htmlFor="photo_profil" className="form-label">
                                    Photo Profil
                                </label>
                                <input
                                    type="file"
                                    className={`form-control ${errors.photo_profil ? "is-invalid" : ""
                                        }`}
                                    id="photo_profil"
                                    accept="image/png, image/jpeg, image/jpg"
                                    required
                                    onChange={uploadToClient}
                                // {...register("photo_profil")}
                                />
                                {/* <div className="invalid-feedback">
                                        {errors.photo_profil?.message}
                                    </div> */}
                                <div className="d-grid mt-5">
                                    <button
                                        // disabled={formState.isSubmitting}
                                        type="submit"
                                        className="btn btn-login"
                                        onClick={uploadToServer}
                                        data-bs-dismiss="modal"
                                    >
                                        Simpan
                                    </button>
                                </div>
                                {errors.apiError && (
                                    <div className="alert alert-danger mt-3 mb-0">
                                        {errors.apiError?.message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
Profil.getLayout = function getLayout(page) {
    return (
        <Layout2>
            {page}
        </Layout2>
    )
}
export default Profil