import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout2 from '../../components/Layout2';
import { userService } from '../../services';

const DonasiDetail = () => {
    const router = useRouter()
    const { idDonasi } = router.query
    // const { user, isLoading } = userService.getUser(username)
    // if (isLoading) return <div>loading...</div>
    // console.log(user)
    // if (user.error) {
    //     return (
    //         <div className="mt-3 pt-3 beranda">
    //             <div className="container-fluid">
    //                 {user.message}
    //             </div>
    //         </div>
    //     )
    // }
    // const donations = user.data.donation



    return (
        <>
            <Head>
                <title>Donasi {idDonasi}</title>
            </Head>
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    <h1>{idDonasi}</h1>

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