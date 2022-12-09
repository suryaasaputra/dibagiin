import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { donationService } from '../../services';
import Layout2 from "../../components/Layout2";
import empty from '../../public/images/empty.png'
import SkeletonLoading2 from '../../components/SkeletonLoading2';
import API_ENDPOINT from '../../globals/api-endpoint';

const StatusBadge = ({ item }) => {


    if (item.status == "Dikonfirmasi") {
        return (
            <b className=' txt-success'>Dikonfirmasi</b>
        )
    }
    if (item.status == "Ditolak") {
        return (
            <b className=' txt-danger'>Ditolak</b>
        )
    }
    // kondisi jika sudah diambil 
    return (
        <b className=''>Belum Dikonfirmasi</b>
    )

}

const PermintaanTerkirimCard = ({ item, mutate }) => {
    const onClickBatal = () => {
        Swal.fire({
            icon: "question",
            title: "Batalkan Permintaan",
            // color: "#73a700",
            text: "Apakah anda yakin ingin membatalkan permintaan ini?",
            focusConfirm: false,
            confirmButtonColor: "#73a700",
            showCancelButton: true,
            cancelButtonColor: '#E51937',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    return donationService.cancelRequest(item.id)
                        .then(() => {
                            Swal.fire({
                                icon: "success",
                                title: "Permintaan telah dibatalkan",
                                confirmButtonColor: "#73a700",
                                timer: 2000,
                            })
                            mutate(`${API_ENDPOINT.request}`)
                            mutate(`${API_ENDPOINT.donation}/request`)
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
    const pesan = `Halo, saya ingin mengambil barang yang didonasikan di website Dibagiin...`
    const linkWa = `https://wa.me/${item.donator.phone_number}?text=${pesan}`
    console.log(item)
    const isConfirmed = item.status == "Dikonfirmasi"
    const isRejected = item.status == "Ditolak"
    const isWaiting = !isConfirmed && !isRejected
    return (
        <>
            <div className="row m-2 p-4 mb-3 rounded-2 outer-shadow">
                <div className="col-md-6 p-2">
                    <p>Anda meminta <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title}</b> </Link> dari <Link href={`/user/${item.donator.user_name}`}> <b>{item.donator.full_name}</b></Link></p>

                    <div className='mt-3'>
                        <Image
                            width={160}
                            height={160}
                            src={item.donation.photo_url}
                            className="img-fluid rounded-2 p-2 outer-shadow"
                            alt='barang'
                        />
                    </div>
                </div>

                <div className='col-md-6 p-2'>
                    <p className=''>{new Date(item.created_at).toLocaleTimeString('id-ID', {
                        day: 'numeric', // numeric, 2-digit
                        year: 'numeric', // numeric, 2-digit
                        month: 'long', // numeric, 2-digit, long, short, narrow
                        hour: 'numeric', // numeric, 2-digit
                        minute: '2-digit', // numeric, 2-digit
                    })}</p>
                    <p>Status : <StatusBadge item={item} /></p>
                    {isWaiting &&
                        <button
                            onClick={onClickBatal}
                            className='btn-style-danger outer-shadow inner-shadow '
                        >
                            <i className='fa fa-trash'></i>  Batalkan permintaan
                        </button>
                    }
                    {isConfirmed &&
                        <a href={linkWa} className='btn-style outer-shadow inner-shadow hover-in-shadow' target="_blank" rel='noreferrer'>Klik untuk mengambil donasi</a>}
                </div>

            </div>
        </>
    )
}
const Terkirim = () => {
    //fetch daftar permintaan
    const { listRequest, isLoading, mutate } = donationService.getAllSubmittedRequest()
    if (isLoading) {
        return (
            <SkeletonLoading2 />
        )
    }


    if (listRequest.error) {
        return (
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    {listRequest.message}
                </div>
            </div>
        )
    }
    const data = listRequest.data.length
    return (
        <div className="mt-3 pt-3 beranda">
            <div className="container-fluid p-3">
                <Head>
                    <title>Permintaan Terkirim - Dibagiin</title>
                </Head>
                <div className='mt-5 m-2'><h2 className='title-sidebar-top'>Permintaan terkirim</h2></div>
                {!data && (
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <Image
                            src={empty}
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
                {listRequest.data.map((item) => (
                    <PermintaanTerkirimCard key={item.id} item={item} mutate={mutate} />
                ))}

            </div>
        </div>
    )
}
Terkirim.getLayout = function getLayout(page) {
    return (
        <Layout2>
            {page}
        </Layout2>
    )
}


export default Terkirim