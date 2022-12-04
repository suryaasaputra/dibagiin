import internalServerError from '../public/images/500.png'
import Image from 'next/image'
import Link from 'next/link'
import LayoutError from '../components/LayoutError'
const Custom500 = () => {
    return (
        <><div className="container-fluid mt-4">
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <Image
                    src={internalServerError}
                    alt="500"
                    className='img-fluid'
                    loading='eager'
                    priority
                >
                </Image>
                <h2>Terjadi Kesalahan... </h2>
                <Link className="btn-style outer-shadow inner-shadow hover-in-shadow" href="/beranda">
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
        </>
    )
}

Custom500.getLayout = function getLayout(page) {
    return (
        <LayoutError>
            {page}
        </LayoutError>
    )
}


export default Custom500