import Head from 'next/head';
import DonasiCard from '../../../components/DonasiCard';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout2 from '../../../components/Layout2';
import { userService } from '../../../services';
import SkeletonLoading3 from '../../../components/SkeletonLoading3';

const User = () => {
    const router = useRouter()
    const { username } = router.query

    const { user, isLoading, mutate } = userService.getUser(username)
    if (isLoading) return (
        <SkeletonLoading3 />
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
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <h2 className='text-center text-decoration-underline'>Donasi {user.data.full_name}</h2>
                    </div>

                    {user.data.donation?.map((item) => (
                        <DonasiCard key={item.id} item={item} mutate={mutate} />
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