import notfound from '../public/images/404.png'
import Image from 'next/image'
import Link from 'next/link'
import LayoutError from '../components/LayoutError'
const Custom404 = () => {
    return (
        <>
            <div className="container-fluid mt-4">
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <Image
                        src={notfound}
                        width={420}
                        height={420}
                        alt="404"
                        className='img-fluid'
                        loading='eager'
                        priority
                    >
                    </Image>
                    <h3 className='text-center'>Halaman yang anda cari tidak ditemukan</h3>
                    <Link className="btn btn-style-second" href="/beranda">
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        </>
    )
}
Custom404.getLayout = function getLayout(page) {
    return (
        <LayoutError>
            {page}
        </LayoutError>
    )
}


export default Custom404