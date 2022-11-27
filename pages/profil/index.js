import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import Router, { useRouter } from "next/router";
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
        const user = userService.userValue
        setUserData(user)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // form validation rules
    const validationSchema = Yup.object().shape({
        full_name: Yup.string().required("Nama lengkap tidak boleh kosong"),
        user_name: Yup.string().required("Username tidak boleh kosong")
            .test({
                skipAbsent: true,
                test(value, ctx) {
                    if (value.includes(" ")) {
                        return ctx.createError({ message: 'Username tidak boleh ada spasi' })
                    }
                    return true
                }
            }),
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
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;
    // submit data from form value
    function onSubmit(data) {
        // console.log(data);
        return userService
            .editProfile(userData.user_name, data)
            .then((r) => {
                let oldData = JSON.parse(localStorage.getItem("user"));
                newData = {
                    id: oldData.id,
                    email: r.data.email,
                    user_name: r.data.user_name,
                    full_name: r.data.full_name,
                    profil_photo_url: r.data.profil_photo_url,
                    token: oldData.token
                }
                localStorage.setItem("user", JSON.stringify(newData));
                location.reload()
            })
            .catch((error) => {
                setError("apiError", { message: error });
            });
    }


    const { user, isLoading } = userService.getUser(userData.user_name)
    if (isLoading) return <div>loading...</div>
    if (user.error) {
        return (
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    {user.message}
                </div>
            </div>
        )
    }


    return (
        <>
            <Head>
                <title>Profil</title>
            </Head>
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">

                    <h1>Profil: {user.data.full_name}
                        <button className='btn' data-bs-toggle="modal" data-bs-target="#editProfil"> <i className="fa-solid fa-pen-to-square"></i></button
                        ></h1>
                    <div>
                        <Image
                            src={user.data.profil_photo_url}
                            width={150}
                            height={150}
                            className="logo-text img-fluid"
                            alt="profil-photo"
                            loading='eager'
                            priority
                        >
                        </Image>
                        <button className='btn' data-bs-toggle="modal" data-bs-target="#uploadPhoto"><i className="fa-solid fa-pen-to-square">Ganti Photo Profil</i></button>
                    </div>
                    <ul>
                        <li>
                            Email:{user.data.email}
                        </li>
                        <li>
                            Jenis Kelamin:{user.data.gender}
                        </li>
                        <li>
                            Nomor Wa:{user.data.phone_number}
                        </li>
                        <li>
                            Alamat:{user.data.address}
                        </li>
                    </ul>
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
                                        value={user.data.full_name}
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
                                        value={user.data.email}
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
                                        value={user.data.user_name}
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
                                        value={user.data.phone_number}
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
                                        value={user.data.address}
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
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
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
                            <form method='PUT' action={`${API_ENDPOINT.user}/${user.data.user_name}/ProfilPhoto`} encType='multipart/form-data' >
                                <div className="mb-3">
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
                                        >
                                            {/* {formState.isSubmitting && (
                                                <span className="spinner-border spinner-border-sm mr-1"></span>
                                            )} */}
                                            Simpan
                                        </button>
                                    </div>
                                    {/* {errors.apiError && (
                                        <div className="alert alert-danger mt-3 mb-0">
                                            {errors.apiError?.message}
                                        </div>
                                    )} */}
                                </div>
                            </form>
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