// import Image from "next/image"
// import offlineImg from '../public/images/offline.png'
// import LayoutError from "../components/LayoutError"
// import { useRouter } from "next/router"

const Offline = () => {
    return (

        <div className="container-fluid mt-4">
            <div className='d-flex justify-content-center align-items-center flex-column'>
                {/* <Image
                    src={offlineImg}
                    width={420}
                    height={420}
                    alt="offline"
                    className='img-fluid'
                    loading='eager'
                    priority
                >
                </Image> */}
                <h3 className='text-center'>Koneksi Internet Anda Terputus</h3>
                <button className="btn btn-style-second" onClick={() => window.location.replace}  >
                    <i className="fas fa-rotate-right"></i>Coba lagi
                </button>
            </div>
        </div>
    )
}

// Offline.getLayout = function getLayout(page) {
//     return (
//         <LayoutError>
//             {page}
//         </LayoutError>
//     )
// }


export default Offline