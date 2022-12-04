import Link from 'next/link';
import Swal from "sweetalert2";
import { useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import { donationService } from '../services';
import { userService } from '../services';


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

const TombolAmbil = ({ item }) => {

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
                        Diambil oleh <Link className="nama-donatur-url" href={`/user/${item.taker.user_name}`}><b>{item.taker.full_name}</b> </Link>
                    </p>
                </span>
            </>
        )
    }

    const user = userService.userData;

    // cek apakah user sudah pernah request ke donasi
    const requester = String(item.requester_id)
    const userId = user.id
    const isRequester = requester.includes(userId)
    // kondisi jika user sudah pernah request
    if (isRequester) {
        return (
            <button
                className='btn-style ms-2'
                style={{ cursor: 'not-allowed', backgroundColor: 'darkgrey', color: 'gray' }}
            >
                Menunggu Konfirmasi
            </button>
        )
    }



    // kondisi jika donasi merupakan donasi yang dibuat sendiri 
    if (item.donator.id == user.id) {
        return
    }


    // kondisi jika donasi masih tersedia
    return (
        <button
            className='btn-style outer-shadow inner-shadow hover-in-shadow ms-2'
            data-bs-toggle="modal"
            data-bs-target={`#formModal${item.id}`}
        >
            Ajukan Permintaan
        </button>
    )
}

//component donasiCard
const DonasiCard = ({ item }) => {
    const router = useRouter();
    const [errors2, setError2] = useState({});

    function handleOnSubmit(event) {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            donation_id: event.target.donation_id.value,
            message: event.target.message.value,
        }

        // alert(JSON.stringify(data))
        return donationService.requestDonation(data.donation_id, data)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil Membuat Permintaan",
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
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: error,
                    confirmButtonColor: "#E51937",
                    timer: 2000,
                }).then((result) => {
                    if (result.isConfirmed) {
                        router.replace(router.asPath)
                    } else if (result.isDenied) {
                        router.replace(router.asPath)
                    } else if (result.isDismissed) {
                        router.replace(router.asPath)
                    }
                })
                setError2({ apiError: { message: error } });
            });
    }
    // const requester = item.requester_id.join(", ")
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
                    <div className="col-md-6 date align-self-center">
                        <p className='text-end'><small>
                            {new Date(item.created_at).toLocaleTimeString('id-ID', {
                                day: 'numeric', // numeric, 2-digit
                                year: 'numeric', // numeric, 2-digit
                                month: 'long', // numeric, 2-digit, long, short, narrow
                                hour: 'numeric', // numeric, 2-digit
                                minute: '2-digit', // numeric, 2-digit
                            })}
                        </small>
                        </p>
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
                            <TombolAmbil item={item} />
                        </div>

                    </div>

                </div>

            </div>
            <div className="modal fade" id={`formModal${item.id}`} tabIndex="-1" aria-labelledby="donasiForm" aria-hidden="true">
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ambil Donasi</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleOnSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="title" className="form-label">
                                        Pesan*
                                    </label>
                                    <input
                                        type="hidden"
                                        id="donation_id"
                                        value={item.id}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className={`form-control ${errors2.title ? "is-invalid" : ""
                                            }`}
                                        id="message"
                                        name='message'
                                        placeholder="Izinkan saya mengambil donasi nya."
                                        autoComplete='on'
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        {errors2.message?.message}
                                    </div>
                                </div>
                                <div className="d-grid mt-5">
                                    <button
                                        type="submit"
                                        className="btn btn-login"
                                        data-bs-dismiss="modal"
                                    >
                                        Kirim Permintaan
                                    </button>
                                </div>
                                {errors2.apiError && (
                                    <div className="alert alert-danger mt-3 mb-0">
                                        {errors2.apiError?.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default DonasiCard