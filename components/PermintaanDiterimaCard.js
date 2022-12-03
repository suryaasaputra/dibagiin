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
            <div className=" mt-4 p-4 rounded-2 outer-shadow">
                <div className='d-flex flex-column'>
                    <div className='ms-auto'>
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
                    <div className='d-flex flex-row align-items-center'>
                        <div>
                            <Image
                                width={60}
                                height={60}
                                src={item.user.profil_photo_url}
                                style={{ border: '4px solid #73a700' }}
                                className="img-fluid rounded-circle"
                                alt='avatar'
                            />
                        </div>
                        <div className='mx-2'>
                            <Link href={`/user/${item.user.user_name}`}> <b>{item.user.full_name} </b></Link>
                            meminta
                            <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title} </b></Link>
                            : "<b>{item.message}</b>"
                        </div>
                        <div className='ms-auto'>
                            <Image
                                width={80}
                                height={80}
                                src={item.donation.photo_url}
                                className="img-fluid rounded-2 "
                                alt='donasi'
                            />
                        </div>
                        <div className='ms-auto'>
                            <p className=' fw-bold'>Permintaan sudah dikonfirmasi</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (item.status == 'Ditolak') {
        return (
            <div className=" mt-4 p-4 rounded-2 outer-shadow">
                <div className='d-flex flex-column'>
                    <div className='ms-auto'>
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
                    <div className='d-flex flex-row align-items-center'>
                        <div>
                            <Image
                                width={60}
                                height={60}
                                src={item.user.profil_photo_url}
                                style={{ border: '4px solid #73a700' }}
                                className="img-fluid rounded-circle"
                                alt='avatar'
                            />
                        </div>
                        <div className='mx-2'>
                            <Link href={`/user/${item.user.user_name}`}> <b>{item.user.full_name} </b></Link>
                            meminta
                            <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title} </b></Link>
                            : "<b>{item.message}</b>"
                        </div>
                        <div className='ms-auto'>
                            <Image
                                width={80}
                                height={80}
                                src={item.donation.photo_url}
                                className="img-fluid rounded-2 "
                                alt='donasi'
                            />
                        </div>
                        <div className='ms-auto'>
                            <p className=' fw-bold'>Permintaan ditolak</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className=" mt-4 p-4 rounded-2 outer-shadow">
            <div className='d-flex flex-column'>
                <div className='ms-auto'>
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
                <div className='d-flex flex-row align-items-center'>
                    <div>
                        <Image
                            width={60}
                            height={60}
                            src={item.user.profil_photo_url}
                            style={{ border: '4px solid #73a700' }}
                            className="img-fluid rounded-circle"
                            alt='avatar'
                        />
                    </div>
                    <div className='mx-2'>
                        <Link href={`/user/${item.user.user_name}`}> <b>{item.user.full_name} </b></Link>
                        meminta
                        <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title} </b></Link>
                        : "<b>{item.message}</b>"
                    </div>
                    <div className='ms-auto'>
                        <Image
                            width={80}
                            height={80}
                            src={item.donation.photo_url}
                            className="img-fluid rounded-2 "
                            alt='donasi'
                        />
                    </div>
                    <div className='ms-auto'>
                        <button
                            onClick={onClickConfirm}
                            className='btn-style-second outer-shadow inner-shadow me-3'
                        >
                            Konfirmasi
                        </button>
                        <button
                            onClick={onClickReject}
                            className='btn-style-danger outer-shadow inner-shadow  ms-auto'
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PermintaanDiterimaCard