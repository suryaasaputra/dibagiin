// import Image from "next/image"
// import offlineImg from '../public/images/offline.png'


const Offline = () => {

    return (

        <div className="container-fluid mt-4">
            <div className='d-flex justify-content-center align-items-center flex-column'>
                {/* <Image
                    src="/public/images/offline.png"
                    width={420}
                    height={420}
                    alt="offline"
                    className='img-fluid'
                    loading='eager'
                    priority
                >
                </Image> */}
                <h3 className='text-center'>Koneksi Internet Anda Terputus</h3>
            </div>
        </div>
    )
}



export default Offline