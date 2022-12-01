
import Head from 'next/head';
import Link from 'next/link';
import Swal from "sweetalert2";
import Image from 'next/image';
import Layout2 from "../../components/Layout2";
import { donationService } from '../../services';

const CardPemberitahuan = ({ item }) => {
    console.log(item)
    console.log(item.type == "request")
    if (item.type == "confirm") {
        const pesan = `Halo, saya ingin mengambil barang yang didonasikan di website Dibagiin...`
        const linkWa = `https://wa.me/${item.donation.donator.phone_number}?text=${pesan}`
        return (
            <div className="row m-5">
                <div className="col-md-12 p-5 mb-3 outer-shadow rounded-2">
                    <div className="row ">
                        <div className='col-8'>
                            <div className="row ">
                                <p>
                                    Permintaan Anda untuk barang
                                    <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title}</b></Link>
                                    telah dikonfirmasi oleh
                                    <Link href={`/user/${item.donation.donator.user_name}`}> <b>{item.donation.donator.full_name}</b></Link>
                                </p>
                            </div>
                            <div className="row ">
                                <p className='text-end'>Pada : {new Date(item.created_at).toLocaleTimeString('id-ID', {
                                    day: 'numeric', // numeric, 2-digit
                                    year: 'numeric', // numeric, 2-digit
                                    month: 'long', // numeric, 2-digit, long, short, narrow
                                    hour: 'numeric', // numeric, 2-digit
                                    minute: '2-digit', // numeric, 2-digit
                                })}</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <Image
                                width={150}
                                height={150}
                                src={item.donation.photo_url}
                                className="img-fluid rounded-2"
                                alt='avatar'
                            />
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <a href={linkWa} target="_blank">Klik untuk mengambil donasi</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (item.type == "reject") {
        return (
            <div className="row m-5">
                <div className="col-md-12 p-5 mb-3 outer-shadow rounded-2">
                    <div className="row ">
                        <div className='col-8'>
                            <div className="row ">
                                <p>
                                    Permintaan Anda untuk barang
                                    <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title}</b></Link>
                                    ditolak oleh
                                    <Link href={`/user/${item.donation.donator.user_name}`}> <b>{item.donation.donator.full_name}.</b></Link>
                                    {item.message}
                                </p>
                            </div>
                            <div className="row ">
                                <p className='text-end'>Pada : {new Date(item.created_at).toLocaleTimeString('id-ID', {
                                    day: 'numeric', // numeric, 2-digit
                                    year: 'numeric', // numeric, 2-digit
                                    month: 'long', // numeric, 2-digit, long, short, narrow
                                    hour: 'numeric', // numeric, 2-digit
                                    minute: '2-digit', // numeric, 2-digit
                                })}</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <Image
                                width={100}
                                height={100}
                                src={item.donation.photo_url}
                                className="img-fluid rounded-circle"
                                alt='avatar'
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (item.type == "request") {
        return (
            <>
                <div className='d-flex  border shadow-sm p-3 my-3   '>
                    <div className='d-flex flex-column '>
                        <div className='d-flex justify-content-start mb-2'>
                            <div className='me-3'>
                                <Image
                                    width={70}
                                    height={70}
                                    src={item.donation_request.requester.profil_photo_url}
                                    className="img-fluid rounded-circle"
                                    alt='avatar'
                                />
                            </div>
                            <div className='py-2 align-self-start'>
                                <div>
                                    <Link href={`/user/${item.donation_request.requester.user_name}`}> <b>{item.donation_request.requester.full_name} </b></Link>
                                </div>
                                <div>
                                    @{item.donation_request.requester.user_name}
                                </div>

                            </div>
                        </div>
                        <div className='d-flex flex-row ps-4'>
                            <div className='ms-5 align-self-center'>
                                <Link href={"/permintaan/diterima"}>
                                    Mengirimkan permintan untuk
                                    <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title}</b></Link>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <Image
                            width={100}
                            height={100}
                            src={item.donation.photo_url}
                            className="img-fluid rounded-2"
                            alt='avatar'
                        />
                    </div>
                    <div className=''>
                        {new Date(item.created_at).toLocaleTimeString('id-ID', {
                            day: 'numeric', // numeric, 2-digit
                            year: 'numeric', // numeric, 2-digit
                            month: 'long', // numeric, 2-digit, long, short, narrow
                            hour: 'numeric', // numeric, 2-digit
                            minute: '2-digit', // numeric, 2-digit
                        })}
                    </div>
                </div>
            </>
        )

    }
}


const Pemberitahuan = () => {
    //fetch history
    const { listHistory, isLoading } = donationService.getHistory()
    if (isLoading) return (<div className="mt-3 pt-3 beranda">
        <div className="container-fluid">
            <p>loading...</p>
            <span className="spinner-border spinner-border-sm mr-1"></span>
        </div>
    </div>)

    if (listHistory.error) {
        return (
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    {listHistory.message}
                </div>
            </div>
        )
    }
    if (listHistory.data == []) {
        return (
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    Belum ada data
                </div>
            </div>
        )
    }
    const data = listHistory.data.length


    return (
        <div className="mt-3 pt-3 beranda">
            <div className="container-fluid">
                <Head>
                    <title>Permintaan diterima-Dibagiin</title>
                </Head>

                <div className='mt-5'><h2>Pemberitahuan</h2></div>

                {!data && (
                    <div className="row m-5"><h2>Belum ada data</h2></div>
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