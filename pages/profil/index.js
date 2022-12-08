import Head from 'next/head';
import Swal from "sweetalert2";
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import DonasiCardProfil from '../../components/DonasiCardProfil';
import { useState } from 'react';
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from 'next/image';
import Layout2 from '../../components/Layout2';
import { userService } from '../../services';
import SkeletonLoading3 from "../../components/SkeletonLoading3";
import API_ENDPOINT from '../../globals/api-endpoint';
import empty from '../../public/images/empty.png';

const Profil = () => {
    const router = useRouter();
    const API_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY
    const [value, setValue] = useState(null);
    const [coord, setCoord] = useState({ lat: null, lng: null });
    const userData = userService.userData;
    // console.log(userData)
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
    const { register, resetField, handleSubmit, setError, formState, setValue: setData, control } = useForm(formOptions);
    const { errors } = formState;
    // submit data from form value
    function onSubmit(data) {
        // console.log(data)
        const newData = {
            id: userData.id,
            email: data.email,
            user_name: userData.user_name,
            full_name: data.full_name,
            profil_photo_url: userData.profil_photo_url,
            token: userData.token,
            lat: data.lat,
            lng: data.lng,
            address: data.address,
            login_time: userData.login_time
        }
        userService.updateCookie(newData)
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
                        const close = document.getElementById('closeModal');
                        close.click()
                        close.click()
                        resetField("full_name", { defaultValue: data.full_name })
                        resetField("email", { defaultValue: data.email })
                        resetField("phone_number", { defaultValue: data.phone_number })
                        resetField("address", { defaultValue: data.address })
                        mutate(`${API_ENDPOINT.user}/${user?.data.user_name}`)
                    } else if (result.isDenied) {
                        const close = document.getElementById('closeModal');
                        close.click()
                        close.click()
                        resetField("full_name", { defaultValue: data.full_name })
                        resetField("email", { defaultValue: data.email })
                        resetField("phone_number", { defaultValue: data.phone_number })
                        resetField("address", { defaultValue: data.address })
                        mutate(`${API_ENDPOINT.user}/${user?.data.user_name}`)
                    } else if (result.isDismissed) {
                        const close = document.getElementById('closeModal');
                        close.click()
                        close.click()
                        resetField("full_name", { defaultValue: data.full_name })
                        resetField("email", { defaultValue: data.email })
                        resetField("phone_number", { defaultValue: data.phone_number })
                        resetField("address", { defaultValue: data.address })
                        mutate(`${API_ENDPOINT.user}/${user?.data.user_name}`)
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
        const body = new FormData();
        body.append("profil_photo", image);
        return userService
            .setProfilPhoto(userData.user_name, body).then((r) => {
                const newData = {
                    id: userData.id,
                    email: userData.email,
                    user_name: userData.user_name,
                    full_name: userData.full_name,
                    profil_photo_url: r.data.profil_photo_url,
                    token: userData.token,
                    login_time: userData.login_time
                };
                userService.updateCookie(newData);
            })
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil Memperbarui Data",
                    confirmButtonColor: "#73a700",
                    timer: 2000,
                }).then((result) => {
                    if (result.isConfirmed) {
                        router.replace(router.asPath)
                    } else if (result.isDenied) {
                        router.replace(router.asPath)
                    } else if (result.isDismissed) {
                        router.replace(router.asPath)
                    }
                });
            })
            .catch((error) => {
                setError("apiError", { message: error });
            });
    };

    const setCoordValue = (coord) => {
        setCoord(coord)
    }
    const handleChange = (value) => {
        setValue(value)
        geocodeByAddress(value.value.description)
            .then(results => getLatLng(results[0]))
            .then((r) => {
                setCoordValue(r)
            })
            .catch(error => console.error(error));

    };
    const onClickSubmit = () => {
        setData('address', value?.label)
        setData('lat', coord.lat)
        setData('lng', coord.lng)
    }

    const { user, isLoading, mutate } = userService.getUser(userData.user_name)

    if (isLoading) return (
        <SkeletonLoading3 />
    )
    if (user.error) {
        return (
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    {user.message}
                </div>
            </div>
        )
    }
    const donasi = user.data.donation?.length
    return (
        <>
            <Head>
                <title>Profil</title>
            </Head>

            <div className="mt-5 pt-3 beranda">
                <div className="container-fluid">

                    <div className="row mt-3 mb-3 p-3">
                        <div className='col-md-6 card-user'>
                            <div className='img-user d-flex flex-column justify-content-center align-items-center'>
                                <h2>{user.data.full_name}</h2>
                                <Image
                                    src={user.data.profil_photo_url}
                                    width={150}
                                    height={150}
                                    className="logo-text img-fluid rounded-circle "
                                    alt="profil-photo"
                                >
                                </Image>
                                <button className='btn' data-bs-toggle="modal" data-bs-target="#uploadPhoto"><i className="fa-solid p-3 mr-3 fa-pen-to-square">Ganti Photo Profil</i></button>
                            </div>
                        </div>

                        <div className='col-md-6 mt-4'>
                            <div className='info-user'>
                                <h2>Info : </h2>
                                <p><i className='fa fa-envelope'></i> {user.data.email}</p>
                                <p><i className='fab fa-whatsapp'></i> {user.data.phone_number}</p>
                                <p><i className='fa fa-user'></i> {user.data.gender}</p>
                                <p><i className="fa-solid fa-map-location-dot"></i> {user.data.address}</p>
                                <button onClick={router.back} className='btn-style outer-shadow inner-shadow hover-in-shadow '>  <i className='fa fa-arrow-left'></i> Kembali</button>
                                <button style={{ border: 'none' }} className='btn-style outer-shadow inner-shadow hover-in-shadow  ms-2' data-bs-toggle="modal" data-bs-target="#editProfil"> <i className="fa-solid fa-pen-to-square"></i> Edit Profile</button>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <h2 className='text-center text-decoration-underline'>Donasi {user.data.full_name}</h2>
                    </div>
                    {!donasi && (
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <Image
                                src={empty}
                                width={400}
                                alt="Empty"
                                className='img-fluid'
                                loading='eager'
                                priority
                            />
                            <h3>Belum ada Donasi</h3>
                        </div>
                    )
                    }
                    {user.data.donation?.map((item) => (
                        <DonasiCardProfil key={item.id} item={item} mutate={mutate} />
                    ))}
                </div>
            </div>


            {/* Modal Popup */}
            <div className="modal fade" id="editProfil" tabIndex="-1" aria-labelledby="editProfilForm" aria-hidden="true">
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Profil</h1>
                            <button type="button" className="btn-close" id='closeModal' data-bs-dismiss="modal" aria-label="Close"></button>
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
                                    <Controller
                                        name="address"
                                        control={control}
                                        rules={{ required: true }}
                                        render={() => <GooglePlacesAutocomplete
                                            apiKey={API_KEY}
                                            apiOptions={{ language: "id" }}
                                            selectProps={{
                                                value,
                                                onChange: handleChange,
                                                placeholder: `${user.data.address}`,
                                                className: `${errors.address ? "is-invalid" : ""}`
                                            }}
                                        />}
                                    />
                                    <input type="hidden" name="lat" id="lat" {...register("lat")}></input>
                                    <input type="hidden" name="lng" id="lng" {...register("lng")}></input>
                                    <div className="invalid-feedback">
                                        {errors.address?.message}
                                    </div>
                                </div>

                                <div className="d-grid mt-5">
                                    <button
                                        disabled={formState.isSubmitting}
                                        type="submit"
                                        onClick={onClickSubmit}
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
                    </div>
                </div>
            </div>

            {/* modal ganti foro profil */}
            <div className="modal fade" id="uploadPhoto" tabIndex="-1" aria-labelledby="uploadPhotoForm" aria-hidden="true">
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ganti Photo Profil</h1>
                            <button type="button" className="btn-close" id='closeModalPhoto' data-bs-dismiss="modal" aria-label="Close"></button>
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

// export async function getServerSideProps(ctx) {
//     // Parse
//     const cookies = nookies.get(ctx)
//     const userData = JSON.parse(cookies.userCookies)
//     const requestOptions = {
//         method: "GET",
//         headers: { "Authorization": `Bearer ${userData.token}` }
//     }
//     const endpoint = `${API_ENDPOINT.user}/${userData.user_name}`
//     const res = await fetch(endpoint, requestOptions)
//     const data = await res.json()
//     const user = data.data
//     return {
//         props: {
//             user,
//         },
//     };
// }

Profil.getLayout = function getLayout(page) {
    return (
        <Layout2>
            {page}
        </Layout2>
    )
}
export default Profil