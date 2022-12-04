import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout2 from '../../components/Layout2';
import { donationService } from '../../services';

const DonasiDetail = () => {
    const router = useRouter()
    const { idDonasi } = router.query
    //fetch donation list
    const { donationData, isLoading } = donationService.getDonationDetail(idDonasi)
    if (isLoading) return (<div className="mt-3 pt-3 beranda">
        <div className="container-fluid">
            <p>loading...</p>
            <span className="spinner-border spinner-border-sm mr-1"></span>
        </div>
    </div>)
    if (donationData?.error) {
        return (
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    {donationData?.message}
                </div>
            </div>
        )
    }
    return (
        <>
            <Head>
                <title>Donasi {idDonasi}</title>
            </Head>
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    <h1>Detail Donasi {donationData.data.title}</h1>
                </div>
                <div>
                    datanya :
                    <p>
                        {JSON.stringify(donationData.data)}
                    </p>
                </div>

            </div>

        </>
    )
}

DonasiDetail.getLayout = function getLayout(page) {
    return (
        <Layout2>
            {page}
        </Layout2>
    )
}
export default DonasiDetail