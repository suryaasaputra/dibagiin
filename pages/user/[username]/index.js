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
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    <h1>User: {user.data.full_name}</h1>
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
                    <ul>
                        <li>
                            Email:{user.data.email}
                        </li>
                        <li>
                            Nomor Wa:{user.data.phone_number}
                        </li>
                    </ul>
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