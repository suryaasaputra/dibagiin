import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Layout2 from '../../../components/Layout2';
import { userService } from '../../../services';

const User = () => {
    const router = useRouter()
    const { username } = router.query
    const { user, isLoading } = userService.getUser(username)
    if (isLoading) return <div>loading...</div>
    console.log(user)
    if (user.error) {
        return (
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    {user.message}
                </div>
            </div>
        )
    }
    // const donations = user.data.donation



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
                                    width={150}
                                    height={150}
                                    className="logo-text img-fluid"
                                    alt="profil-photo"
                                    loading='eager'
                                    priority
                                >
                                </Image>
                            </div>

                            <div className="info-user">
                                <h2>{user.data.full_name}</h2>
                                <p><i className='fa fa-envelope'></i> {user.data.email}</p>
                                <p><i className='fab fa-whatsapp'></i> {user.data.phone_number}</p>
                                <p><i className="fa-solid fa-map-location-dot"></i>{user.data.address}</p>
                                <a href='/beranda' className='btn-style outer-shadow inner-shadow hover-in-shadow '>Kembali</a>
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