import Head from 'next/head';
import { donationService } from '../../services';
import Layout2 from "../../components/Layout2";
import PermintaanDiterimaCard from '../../components/PermintaanDiterimaCard';


const Diterima = () => {

    //fetch daftar permintaan
    const { listRequest, isLoading } = donationService.getAllRequest()
    if (isLoading) return (<div className="mt-3 pt-3 beranda">
        <div className="container-fluid">
            <p>loading...</p>
            <span className="spinner-border spinner-border-sm mr-1"></span>
        </div>
    </div>)

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
                <div className='mt-5'><h2>Permintaan diterima</h2></div>
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

                {listRequest.data.map((item) => (
                    <>
                        <PermintaanDiterimaCard key={item.id} item={item} />
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