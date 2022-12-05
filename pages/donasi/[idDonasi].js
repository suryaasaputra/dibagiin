import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout2 from '../../components/Layout2';
import { donationService } from '../../services';
import SkeletonLoading from '../../components/skeletonLoading';

const DonasiDetail = () => {
    const router = useRouter()
    const { idDonasi } = router.query
    //fetch donation list
    const { donationData, isLoading } = donationService.getDonationDetail(idDonasi)
    if (isLoading) return (
        <SkeletonLoading />
    )
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
                <div className="container-fluid p-3">
                    <div className="mt-5"><h2>Detail Donasi {donationData.data.title}</h2></div>
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