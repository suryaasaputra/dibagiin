import Link from 'next/link';
import Swal from "sweetalert2";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from 'next/image';
import { donationService } from '../services';
import API_ENDPOINT from '../globals/api-endpoint';


const StatusBadge = ({ item }) => {

    // kondisi jika status tersedia
    if (item.status != "Tersedia") {
        return (
            <div className='mt-3'><p>Status: <span className='status-tidak-tersedia'>{item.status}</span></p></div>
        )
    }

    // kondisi jika sudah diambil 
    return (
        <div className='mt-3'><p>Status: <span className='status-tersedia'>{item.status}</span></p></div>
    )

}

const TombolAmbil = ({ item, mutate }) => {

    // kondisi ketika donasi sudah diambil pengguna lain
    if (item.status != "Tersedia") {
        return (
            <>
                <button
                    className='btn-style ms-2'
                    style={{ cursor: 'not-allowed', backgroundColor: 'darkgrey', color: 'gray' }}
                >
                    Sudah diambil
                </button>
                <span>
                    <p className='mt-2'>
                        Diambil oleh <Link className="nama-donatur-url" href={`/user/${item.taker?.user_name}`}><b>{item.taker?.full_name}</b> </Link>
                    </p>
                </span>
            </>
        )
    }
    // kondisi jika donasi masih tersedia

    const onClickHapus = () => {
        if (item.requester_id?.length) {
            Swal.fire({
                icon: "error",
                title: "Tidak Bisa Hapus Donasi",
                // color: "#73a700",
                text: "Tidak bisa menghapus donasi, sudah ada permintaan ke donasi ini.",
                focusConfirm: false,
                confirmButtonColor: "#73a700",
            })
        } else {
            Swal.fire({
                icon: "question",
                title: "Hapus Donasi",
                // color: "#73a700",
                text: "Apakah anda yakin ingin menghapus donasi ini?",
                focusConfirm: false,
                confirmButtonColor: "#73a700",
                showCancelButton: true,
                cancelButtonColor: '#E51937',
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        return donationService.deleteDonation(item.id)
                            .then(() => {
                                Swal.fire({
                                    icon: "success",
                                    title: "Berhasil menghapus donasi",
                                    confirmButtonColor: "#73a700",
                                    timer: 2000,
                                })
                                    .then(() => mutate(`${API_ENDPOINT.user}/${item.donator.user_name}`))
                            })
                            .catch((error) => {
                                Swal.fire({
                                    icon: "error",
                                    title: "Gagal Hapus Donasi",
                                    // color: "#73a700",
                                    text: "Tidak bisa menghapus donasi, sudah ada permintaan ke donasi ini.",
                                    focusConfirm: false,
                                    confirmButtonColor: "#73a700",
                                })
                            });


                    } else if (result.isDenied) {
                        return
                    } else if (result.isDismissed) {
                        return
                    }
                })
        }

    }

    const API_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY
    const [value, setValue] = useState(null);
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Nama Donasi tidak boleh kosong").max(30, "Maksimal 30 karakter"),
        description: Yup.string().required("Deskripsi tidak boleh kosong"),
        weight: Yup.number().required("Berat tidak boleh kosong"),
        location: Yup.string().required("Lokasi tidak boleh kosong"),
    })
    const formOptions = {
        resolver: yupResolver(validationSchema),
    }

    // get functions to build form with useForm() hook
    const { register, resetField, handleSubmit, setError, formState, setValue: setData, control } = useForm(formOptions);
    const { errors } = formState;
    function onSubmit(data) {
        return donationService.editDonation(data.donation_id, data)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil Menyimpan Perubahan",
                    confirmButtonColor: "#73a700",
                    timer: 2000,
                })
                    .then((result) => {
                        if (result.isConfirmed) {

                            resetField("title", { defaultValue: data.title })
                            resetField("description", { defaultValue: data.description })
                            resetField("weight", { defaultValue: data.weight })
                            mutate(`${API_ENDPOINT.user}/${item.donator.user_name}`)
                            const close = document.getElementById('closeModal');
                            close.click()
                        } else if (result.isDenied) {
                            resetField("title", { defaultValue: data.title })
                            resetField("description", { defaultValue: data.description })
                            resetField("weight", { defaultValue: data.weight })
                            mutate(`${API_ENDPOINT.user}/${item.donator.user_name}`)
                            const close = document.getElementById('closeModal');
                            close.click()
                        } else if (result.isDismissed) {
                            resetField("title", { defaultValue: data.title })
                            resetField("description", { defaultValue: data.description })
                            resetField("weight", { defaultValue: data.weight })
                            mutate(`${API_ENDPOINT.user}/${item.donator.user_name}`)
                            const close = document.getElementById('closeModal');
                            close.click()
                        }
                    })
            })
            .catch((error) => {
                setError("apiError", { message: error });
            });
    }
    return (
        <>
            <button
                className='btn-style-second outer-shadow inner-shadow  ms-2'
                data-bs-toggle="modal"
                data-bs-target={`#formModal${item.id}`}
            >
                Edit
            </button>
            <button
                className='btn-style-danger outer-shadow inner-shadow ms-2'
                onClick={onClickHapus}
            >
                Hapus
            </button>
            <div className="modal fade" id={`formModal${item.id}`} tabIndex="-1" aria-labelledby="donasiForm" aria-hidden="true">
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ubah Data Donasi</h1>
                            <button type="button" id='closeModal' className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    type="hidden"
                                    id="donation_id"
                                    value={item.id}
                                    {...register("donation_id")}
                                />
                                <div className="mb-4">
                                    <label htmlFor="title" className="form-label">
                                        Nama Donasi (maksimal 30 karakter)*
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.title ? "is-invalid" : ""
                                            }`}
                                        id="title"
                                        name='title'
                                        defaultValue={item.title}
                                        autoComplete='on'
                                        {...register("title")}
                                        maxLength="30"
                                    />
                                    <div className="invalid-feedback">
                                        {errors.title?.message}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="description" className="form-label">
                                        Deskripsi*
                                    </label>
                                    <textarea
                                        type="text"
                                        className={`text-deskripsi form-control ${errors.description ? "is-invalid" : ""}`}
                                        name="description"
                                        id="description"
                                        autoComplete='on'
                                        defaultValue={item.description}
                                        {...register("description")}>
                                    </textarea>
                                    <div className="invalid-feedback">{errors.description?.message}</div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="weight" className="form-label">
                                        Berat Barang*
                                    </label>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <input
                                            type="number"
                                            className={`form-control ${errors.weight ? "is-invalid" : ""}`}
                                            name="weight"
                                            id="weight"
                                            width='50'
                                            autoComplete='on'
                                            defaultValue={item.weight}
                                            {...register("weight")}
                                        />
                                        <span className='mx-2'>Gram</span>
                                    </div>
                                    <div className="invalid-feedback">{errors.weight?.message}</div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="location" className="form-label">
                                        Lokasi*
                                    </label>
                                    <Controller
                                        name="location"
                                        control={control}
                                        rules={{ required: true }}
                                        render={() => <GooglePlacesAutocomplete
                                            apiKey={API_KEY}
                                            apiOptions={{ language: "id" }}
                                            selectProps={{
                                                value,
                                                onChange: setValue,
                                                placeholder: `${item.location}`,
                                                className: `${errors.location ? "is-invalid" : ""}`
                                            }}
                                        />}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.location?.message}
                                    </div>
                                </div>

                                <div className="d-grid mt-5">
                                    <button
                                        disabled={formState.isSubmitting}
                                        onClick={() => {
                                            setData('location', value?.label)
                                        }}
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
                    </div>
                </div>
            </div>
        </>

    )
}

//component donasiCard
const DonasiCardProfil = ({ item, mutate }) => {
    return (
        <div className="row mt-3 p-2">
            <div className="col-md-12 p-4 mb-3 outer-shadow rounded-2">
                <div className='row'>
                    <div className='col-md-6 header-card-donasi d-flex align-items-center p-2'>
                        <Image
                            width={70}
                            height={70}
                            src={item.donator.profil_photo_url}
                            className="img-fluid rounded-circle mb-3"
                            alt='avatar'
                        />
                        <div className='nama-donator ms-2'>
                            <div>
                                <Link className="nama-donatur-url" href={`/user/${item.donator.user_name}`}><h4>{item.donator.full_name}</h4></Link>
                                <p><i>@{item.donator.user_name}</i></p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 date  align-self-center    text-end">
                        <small>
                            {new Date(item.created_at).toLocaleTimeString('id-ID', {
                                day: 'numeric', // numeric, 2-digit
                                year: 'numeric', // numeric, 2-digit
                                month: 'long', // numeric, 2-digit, long, short, narrow
                                hour: 'numeric', // numeric, 2-digit
                                minute: '2-digit', // numeric, 2-digit
                            })}
                        </small>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6 content-card-donasi p-2 text-center'>
                        <div className="img-barang-wrapper">
                            <Image
                                width={500}
                                height={350}
                                src={item.photo_url}
                                className="img-fluid rounded-2 img-barang p-1"
                                alt="Image Barang"
                            />
                        </div>

                    </div>

                    <div className='col-md-6 content-card-donasi p-2'>
                        <div className='info-content-card-donasi'>
                            <h2 className='fw-bold'>{item.title}</h2>
                            <p className='deskripsi'>Deskripsi :</p>
                            <div className='deskripsi-barang'>
                                <p>{item.description}</p>
                            </div>
                            <StatusBadge item={item} />

                            <p className='lokasi mt-3'>Lokasi : {item.location}</p>
                            <Link href={`/donasi/${item.id}`} className='btn-style outer-shadow inner-shadow hover-in-shadow'>
                                Lihat Detail
                            </Link>
                            <TombolAmbil item={item} mutate={mutate} />
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default DonasiCardProfil