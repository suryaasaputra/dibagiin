import Head from 'next/head';
import Link from 'next/link';
import DonasiCard from '../../../components/DonasiCard';
import { useRouter } from 'next/router';
import Image from 'next/image';
import notfound from '../../../public/images/404.png'
import Layout2 from '../../../components/Layout2';
import { userService } from '../../../services';
import SkeletonLoading3 from '../../../components/SkeletonLoading3';

const User = () => {
    const router = useRouter()
    const { username } = router.query

    const { user, isLoading, error, mutate } = userService.getUser(username)

    if (error) {
        return (
            <div className="mt-5 pt-3 beranda">
                <div className="container-fluid mt-4">
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <h2 className='text-center'>{"Pengguna tidak ditemukan"}</h2>
                        <Link className="btn btn-style-second" href="/beranda">
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    if (isLoading) return (
        <SkeletonLoading3 />
    )


    return (
        <>
            <Head>
                <title>User</title>
            </Head>

            <div className="mt-5 pt-3 beranda">
                <div className="container-fluid">

                    <div className="row mt-3 mb-3 p-3">
                        <div className='col-md-6 card-user'>
                            <div className='img-user d-flex flex-column justify-content-center align-items-center'>
                                <h2>{user.data.full_name}</h2>
                                <Image
                                    src={user.data.profil_photo_url}
                                    width={150}
                                    height={150}
                                    className="logo-text img-fluid rounded-circle "
                                    alt="User-photo"
                                >
                                </Image>
                            </div>
                        </div>

                        <div className='col-md-6 mt-4'>
                            <div className='info-user'>
                                <h2>Info : </h2>
                                <p><i className='fa fa-envelope'></i> {user.data.email}</p>
                                <p><i className='fab fa-whatsapp'></i> {user.data.phone_number}</p>
                                <p><i className='fa fa-user'></i> {user.data.gender}</p>
                                <p><i className="fa-solid fa-map-location-dot"></i> {user.data.address}</p>
                                <button onClick={router.back} className='btn-style outer-shadow inner-shadow hover-in-shadow '>  <i className='fa fa-arrow-left'></i> Kembali</button>
                            </div>
                        </div>

                    </div>
                    <div className="row p-2 m-2">
                        <h2 className='text-center title-sidebar-top'>Donasi {user.data.full_name}</h2>
                    </div>

                    {user.data.donation?.map((item) => (
                        <DonasiCard key={item.id} item={item} mutate={mutate} user={username} />
                    ))}
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