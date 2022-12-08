import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { donationService } from '../../services';
import Layout2 from "../../components/Layout2";
import empty from '../../public/images/empty.png'
import SkeletonLoading2 from '../../components/SkeletonLoading2';

const PermintaanTerkirimCard = ({ item }) => {
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
                    <p>Status : <b className='rounded-3 btn-info'><i className='fa fa-info-circle'></i> {item.status}</b></p>
                    <button
                        // onClick={onClickReject}
                        className='btn-style-danger outer-shadow inner-shadow '
                    >
                        <i className='fa fa-trash'></i>  Batalkan permintaan
                    </button>
                </div>

            </div>
        </>
    )
}
const Terkirim = () => {
    //fetch daftar permintaan
    const { listRequest, isLoading } = donationService.getAllSubmittedRequest()
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
                <div className='mt-5'><h2>Permintaan terkirim</h2></div>
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
                    <PermintaanTerkirimCard key={item.id} item={item} />
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