import Link from 'next/link';
import Image from 'next/image';
import Swal from "sweetalert2";
import { donationService } from '../services';
const PermintaanDiterimaCard = ({ item }) => {

    const onClickConfirm = () => {
        Swal.fire({
            icon: "question",
            title: "Konfirmasi Permintaan",
            // color: "#73a700",
            text: "Apakah anda yakin ingin mengkonfirmasi permintaan ini?",
            focusConfirm: false,

            confirmButtonColor: "#73a700",
            showCancelButton: true,
            cancelButtonColor: '#E51937',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    return donationService.confirmRequest(item.id)
                        .then(() => {
                            Swal.fire({
                                icon: "success",
                                title: "Permintaan telah dikonfirmasi",
                                confirmButtonColor: "#73a700",
                                timer: 2000,
                            })
                        })
                        .catch((error) => {
                            Swal.fire({
                                icon: "error",
                                title: `Terjadi kesalahan...${error}`,
                                confirmButtonColor: "#73a700",
                                timer: 2000,
                            })
                        });


                } else if (result.isDenied) {

                } else if (result.isDismissed) {

                }
            })
    }
    const onClickReject = () => {
        Swal.fire({
            icon: "question",
            title: "Tolak Permintaan",
            // color: "#73a700",
            text: "Apakah anda yakin ingin menolak permintaan ini?",
            focusConfirm: false,
            confirmButtonColor: "#73a700",
            showCancelButton: true,
            cancelButtonColor: '#E51937',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    return donationService.rejectRequest(item.id)
                        .then(() => {
                            Swal.fire({
                                icon: "success",
                                title: "Permintaan telah ditolak",
                                confirmButtonColor: "#73a700",
                                timer: 2000,
                            })
                        })
                        .catch((error) => {
                            Swal.fire({
                                icon: "error",
                                title: `Terjadi kesalahan...${error}`,
                                confirmButtonColor: "#73a700",
                                timer: 2000,
                            })
                        });


                } else if (result.isDenied) {

                } else if (result.isDismissed) {

                }
            })
    }
    if (item.status == 'Dikonfirmasi') {
        return (
            <div className="row m-2 mt-4 p-4 rounded-2 outer-shadow">
                    <div className='col-md-6'>
                        <div className=''>
                            <Image
                                width={60}
                                height={60}
                                src={item.user.profil_photo_url}
                                style={{ border: '4px solid #73a700' }}
                                className="img-fluid rounded-circle"
                                alt='avatar'
                            />
                            <Link href={`/user/${item.user.user_name}`}> <b>{item.user.full_name} </b></Link>
                            meminta
                            <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title} </b></Link>
                        </div>
                        <div className='mt-3'>
                            <Image
                                width={160}
                                height={160}
                                src={item.donation.photo_url}
                                className="img-fluid rounded-2 outer-shadow p-2 ms-1"
                                alt='donasi'
                            />
                        </div>
                       
                    </div>

                    <div className='col-md-6 mt-3'>
                        <small>
                            {new Date(item.created_at).toLocaleTimeString('id-ID', {
                                day: 'numeric', // numeric, 2-digit
                                year: 'numeric', // numeric, 2-digit
                                month: 'long', // numeric, 2-digit, long, short, narrow
                                hour: 'numeric', // numeric, 2-digit
                                minute: '2-digit', // numeric, 2-digit
                            })}
                        </small>
                        <div className='mt-3 fw-bold'>
                            <p>Pesan : "{item.message}"</p>
                            <b className='btn-info' style={{fontSize: '13.5px'}}><i className='fa fa-check-circle'></i> Permintaan sudah dikonfirmasi</b>
                        </div>
                    </div>
            </div>
        )
    }
    if (item.status == 'Ditolak') {
        return (
            <div className="row m-2 mt-4 p-4 rounded-2 outer-shadow">
                <div className='col-md-6'>
                    <div>
                        <Image
                            width={60}
                            height={60}
                            src={item.user.profil_photo_url}
                            style={{ border: '4px solid #73a700' }}
                            className="img-fluid rounded-circle"
                            alt='avatar'
                        />
                        <Link href={`/user/${item.user.user_name}`}> <b>{item.user.full_name} </b></Link>
                        meminta
                        <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title} </b></Link>
                    </div>
                    <div className='mt-3'>
                        <Image
                            width={160}
                            height={160}
                            src={item.donation.photo_url}
                            className="img-fluid rounded-2 p-2 outer-shadow"
                            alt='donasi'
                            />
                    </div>
                </div>

                <div className='col-md-6 mt-3'>
                    <small>
                            {new Date(item.created_at).toLocaleTimeString('id-ID', {
                                day: 'numeric', // numeric, 2-digit
                                year: 'numeric', // numeric, 2-digit
                                month: 'long', // numeric, 2-digit, long, short, narrow
                                hour: 'numeric', // numeric, 2-digit
                                minute: '2-digit', // numeric, 2-digit
                            })}
                    </small>

                    <div className='mt-3 fw-bold'>
                        <p>Pesan : "{item.message}"</p>
                        <b className='btn-danger' style={{fontSize: '13.5px'}}><i className='fa fa-ban'></i> Permintaan ditolak</b>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="row m-2 mt-4 p-4 rounded-2 outer-shadow">
            <div className='col-md-6 p-3'>
                <div>
                    <Image
                        width={60}
                        height={60}
                        src={item.user.profil_photo_url}
                        style={{ border: '4px solid #73a700' }}
                        className="img-fluid rounded-circle"
                        alt='avatar'
                    />
                    <Link href={`/user/${item.user.user_name}`}> <b>{item.user.full_name} </b></Link>
                    meminta
                    <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title} </b></Link>
                </div>

                <div className='mt-3'>
                    <Image
                        width={120}
                        height={120}
                        src={item.donation.photo_url}
                        className="img-fluid rounded-2 p-2 outer-shadow"
                        alt='donasi'
                    />
                </div>
            </div>

            <div className='col-md-6 p-3'>
                <small>
                    {new Date(item.created_at).toLocaleTimeString('id-ID', {
                        day: 'numeric', // numeric, 2-digit
                        year: 'numeric', // numeric, 2-digit
                        month: 'long', // numeric, 2-digit, long, short, narrow
                        hour: 'numeric', // numeric, 2-digit
                        minute: '2-digit', // numeric, 2-digit
                    })}
                </small>

                <div className='mt-3'>
                    <p className='fw-bold'>Pesan : "{item.message}"</p>
                </div>
                    
                <div className='mt-3'>
                    <button
                        onClick={onClickConfirm}
                        className='btn-style-second outer-shadow inner-shadow me-3'
                    >
                       <i className='fa fa-check'></i> Konfirmasi
                    </button>
                    <button
                        onClick={onClickReject}
                        className='btn-style-danger outer-shadow inner-shadow '
                    >
                       <i className='fa fa-trash'></i>  Hapus
                    </button>     
                </div>
            </div>
        </div>
    )
}

export default PermintaanDiterimaCard