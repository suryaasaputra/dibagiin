import Head from 'next/head';
import Image from 'next/image';
import { donationService } from '../../services';
import Layout2 from "../../components/Layout2";
import PermintaanDiterimaCard from '../../components/PermintaanDiterimaCard';
import empty from '../../public/images/empty.png'
import SkeletonLoading2 from '../../components/SkeletonLoading2';

const Diterima = () => {

    //fetch daftar permintaan
    const { listRequest, isLoading, mutate } = donationService.getAllRequest()
    if (isLoading) return (
        <SkeletonLoading2 />
    )

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
        <div className="mt-3 pt-3 beranda ">
            <div className="container-fluid p-3">
                <Head>
                    <title>Permintaan Diterima - Dibagiin</title>
                </Head>
                <div className='mt-5 m-2'><h2 className='title-sidebar-top'>Permintaan diterima</h2></div>
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
                    <>
                        <PermintaanDiterimaCard key={item.id} item={item} mutate={mutate} />
                    </>
                ))}

            </div>
        </div>
    )
}

Diterima.getLayout = function getLayout(page) {
    return (
        <Layout2>
            {page}
        </Layout2>
    )
}


export default Diterima