
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout2 from "../../components/Layout2";
import { donationService } from '../../services';
import empty from '../../public/images/empty.png';
import SkeletonLoading from "../../components/SkeletonLoading";

const CardPemberitahuan = ({ item }) => {
    const router = useRouter()
    if (item.type == "confirm") {
        const pesan = `Halo, saya ingin mengambil barang yang didonasikan di website Dibagiin...`
        const linkWa = `https://wa.me/${item.donation.donator.phone_number}?text=${pesan}`
        return (
            <>
                <div className="row mt-4 m-2 mb-4 p-3 rounded-2 outer-shadow" onClick={() => router.push("/permintaan/diterima")}>
                    <div className='col-md-6'>
                        <div>
                            <p>
                                Permintaan Anda untuk barang
                                <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title} </b></Link>
                                telah dikonfirmasi oleh
                                <Link href={`/user/${item.donation.donator.user_name}`}> <b>{item.donation.donator.full_name}</b></Link>
                            </p>
                        </div>
                        <div className=''>
                            <Image
                                width={120}
                                height={120}
                                src={item.donation.photo_url}
                                className="img-fluid rounded-2 p-2 outer-shadow"
                                alt='avatar'
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <p>
                            {new Date(item.created_at).toLocaleTimeString('id-ID', {
                                day: 'numeric', // numeric, 2-digit
                                year: 'numeric', // numeric, 2-digit
                                month: 'long', // numeric, 2-digit, long, short, narrow
                                hour: 'numeric', // numeric, 2-digit
                                minute: '2-digit', // numeric, 2-digit
                            })}
                        </p>

                        <a href={linkWa} className='btn-style outer-shadow inner-shadow hover-in-shadow' target="_blank" rel='noreferrer'>Klik untuk mengambil donasi</a>
                    </div>
                </div>
            </>
        )

    }
    if (item.type == "reject") {
        return (
            <>
                <div className="row mt-4 m-2 mb-4 p-3 rounded-2 outer-shadow" onClick={() => router.push("/permintaan/diterima")}>
                    <div className='col-md-6'>
                        <div>
                            <p>
                                Permintaan Anda untuk barang
                                <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title} </b></Link>
                                ditolak oleh
                                <Link href={`/user/${item.donation.donator.user_name}`}> <b> {item.donation.donator.full_name}</b></Link>
                            </p>
                        </div>

                        <div>
                            <Image
                                width={120}
                                height={120}
                                src={item.donation.photo_url}
                                className="img-fluid rounded-2 p-2 outer-shadow"
                                alt='avatar'
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
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
                            <b className='btn-danger' style={{ fontSize: '13.5px' }}>
                                "{item.message}"
                            </b>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (item.type == "rejectAll") {
        return (
            <>
                <div className="row mt-4 m-2 mb-4 p-3 rounded-2 outer-shadow" onClick={() => router.push("/permintaan/diterima")}>
                    <div className='col-md-6'>
                        <p>
                            Permintaan Anda untuk barang
                            <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title} </b></Link>
                            ditolak oleh
                            <Link href={`/user/${item.donation.donator.user_name}`}> <b> {item.donation.donator.full_name}</b></Link>
                        </p>
                        <div>
                            <Image
                                width={120}
                                height={120}
                                src={item.donation.photo_url}
                                className="img-fluid rounded-2 p-2 outer-shadow"
                                alt='avatar'
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
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
                            <b className='btn-info' style={{ fontSize: '13.5px' }}>
                                "{item.message}"
                            </b>
                        </div>

                    </div>
                </div>
            </>
        )
    }
    if (item.type == "request") {
        return (
            <>
                <div className='row mt-4 m-2 mb-4 p-3 rounded-2 outer-shadow' onClick={() => router.push("/permintaan/diterima")}>
                    <div className='text-end'>
                        {new Date(item.created_at).toLocaleTimeString('id-ID', {
                            day: 'numeric', // numeric, 2-digit
                            year: 'numeric', // numeric, 2-digit
                            month: 'long', // numeric, 2-digit, long, short, narrow
                            hour: 'numeric', // numeric, 2-digit
                            minute: '2-digit', // numeric, 2-digit
                        })}
                    </div>
                    <div className='col-sm-6'>
                        <div className='d-flex'>
                            <Image
                                width={70}
                                height={70}
                                src={item.donation_request.requester.profil_photo_url}
                                className="img-fluid rounded-circle"
                                alt='avatar'
                            />
                            <div className='d-flex flex-column my-auto mx-2'>
                                <Link href={`/user/${item.donation_request.requester.user_name}`}> <b>{item.donation_request.requester.full_name} </b></Link>
                                <span>@{item.donation_request.requester.user_name}</span>
                            </div>
                        </div>

                        <div className='mt-3'>
                            Mengirimkan permintan untuk barang
                            <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title}</b></Link>

                        </div>
                    </div>

                    <div className='col-sm-6'>
                        <div className='mt-2'>
                            <Image
                                width={120}
                                height={120}
                                src={item.donation.photo_url}
                                className="img-fluid rounded-2 p-2 outer-shadow"
                                alt='avatar'
                            />
                        </div>
                    </div>
                </div>
            </>
        )

    }
}


const Pemberitahuan = () => {
    //fetch history
    const { listHistory, isLoading } = donationService.getHistory()
    if (isLoading) return (
        <SkeletonLoading />
    )

    if (listHistory.error) {
        return (
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    {listHistory.message}
                </div>
            </div>
        )
    }
    const data = listHistory.data.length


    return (
        <div className="mt-3 pt-3 beranda">
            <div className="container-fluid p-3">
                <Head>
                    <title>Pemberitahuan - Dibagiin</title>
                </Head>

                <div className='mt-5'><h2>Pemberitahuan</h2></div>

                {!data && (
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <img
                            src="/images/empty.webp"
                            width={400}
                            alt="Empty"
                            className='img-fluid'
                            loading='eager'
                            priority
                        />
                        <h3>Belum ada data</h3>
                    </div>
                )
                }


                {listHistory.data.map((item) => (
                    <CardPemberitahuan key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

Pemberitahuan.getLayout = function getLayout(page) {
    return (
        <Layout2>
            {page}
        </Layout2>
    )
}

export default Pemberitahuan