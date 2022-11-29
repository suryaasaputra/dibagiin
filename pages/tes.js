import { parseCookies } from "nookies";
import { userService } from "../services";
export default function Tes({ userData }) {
    console.log(userData)
    return (
        <>
            <div>
                <h1>Homepage </h1>
                <p>Data from cookie:    </p>
                <ul>
                    <li>{userData.full_name}</li>
                    <li>{userData.token}</li>
                    <li>{userData.user_name}</li>
                    <img src={userData.profil_photo_url} />

                </ul>
            </div>
        </>
    )
}
// Tes.getInitialProps = async (ctx) => {
//     const cookies = parseCookies(ctx);
//     const userData = JSON.parse(cookies.userCookies)
//     return { userData };
// }
export async function getServerSideProps(ctx) {
    const userData = userService.userData(ctx)
    return {
        props: {
            userData,
        },
    };

    // if (res) {
    //     if (Object.keys(data).length === 0 && data.constructor === Object) {
    //         res.writeHead(301, { Location: "/" })
    //         res.end()
    //     }
    // }

    // return {
    //     data: data && data,
    // }
}