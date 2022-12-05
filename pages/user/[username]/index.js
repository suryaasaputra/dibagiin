import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Layout2 from '../../../components/Layout2';
import { userService } from '../../../services';

const User = () => {
    const router = useRouter()
    const { username } = router.query
    const { user, isLoading } = userService.getUser(username)
    if (isLoading) return (
       <div className='beranda'>
        <div className='container-fluid'>
            <p>loading</p>
            <span className='spinner-border'></span>
        </div>
       </div>
    )
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
            <div className="beranda">
                <div className="container-fluid">

                    <div className="row p-3 mb-3" style={{marginTop: '4rem'}}>
                        <div className='col-md-6 card-user'>
                            <div className='img-user d-flex flex-column justify-content-center align-items-center'>
                                <h2>{user.data.full_name}</h2>
                                <Image
                                    src={user.data.profil_photo_url}
                                    width={150}
                                    height={150}
                                    className="logo-text img-fluid rounded-circle "
                                    alt="profil-photo"
                                >
                                </Image>
                            </div>
                        </div>
                        <div className='col-md-6 mt-4'>
                            <div className='info-user'>
                                <h2>Info User</h2>
                                <p><i className='fa fa-envelope'></i> {user.data.email}</p>
                                <p><i className='fab fa-whatsapp'></i> {user.data.phone_number}</p>
                                <p><i className="fa-solid fa-map-location-dot"></i> {user.data.address}</p>
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