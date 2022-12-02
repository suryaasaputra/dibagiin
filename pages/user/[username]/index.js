import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Layout2 from '../../../components/Layout2';
import { userService } from '../../../services';

const User = () => {
    const router = useRouter()
    const { username } = router.query
    const { user, isLoading } = userService.getUser(username)
    if (isLoading) return (<div className="mt-3 pt-3 beranda">
        <div className="container-fluid">
            <p>loading...</p>
            <span className="spinner-border spinner-border-sm mr-1"></span>
        </div>
    </div>)
    if (user.error) {
        return (
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    {user.message}
                </div>
            </div>
        )
    }
    return (
        <>
            <Head>
                <title>User</title>
            </Head>
            <div className="mt-5 pt-3 beranda">
                <div className="container-fluid">

                    <div className="row mt-3 mb-3">
                        <div className='col-md-12 card-user'>
                            <div className='img-user'>
                                <Image
                                    src={user.data.profil_photo_url}
                                    width={180}
                                    height={180}
                                    className="logo-text img-fluid p-2 outer-shadow rounded-2"
                                    alt="profil-photo"
                                    loading='eager'
                                    priority
                                >
                                </Image>
                            </div>

                            <div className="info-user mt-4 p-3">
                                <h2>{user.data.full_name}</h2>
                                <p><i className='fa fa-envelope'></i> {user.data.email}</p>
                                <p><i className='fab fa-whatsapp'></i> {user.data.phone_number}</p>
                                <p><i className="fa-solid fa-map-location-dot"></i> {user.data.address}</p>
                                <a href='/donasi' className='btn-style outer-shadow inner-shadow hover-in-shadow '>Kembali</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

User.getLayout = function getLayout(page) {
    return (
        <Layout2>
            {page}
        </Layout2>
    )
}
export default User