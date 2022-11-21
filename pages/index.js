/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import heroImage from '../public/images/heros/hero-image.png'
import aboutImage from '../public/images/about-img.png'
import faqImage from '../public/images/faq.png'
import arifImage from '../public/images/teams/arif.jpg'
import suryaImage from '../public/images/teams/surya.jpg'
import annasImage from '../public/images/teams/annas.jpg'
import yudaImage from '../public/images/teams/yuda.jpeg'
import buku1Image from '../public/images/gallery/buku1.jpg'
import buku2Image from '../public/images/gallery/buku2.jpg'
import kotak1Image from '../public/images/gallery/kotak1.jpg'
import shoes1Image from '../public/images/gallery/shoes1.jpg'
import shoes2Image from '../public/images/gallery/shoes2.jpg'
import watch1Image from '../public/images/gallery/watch1.jpg'
import watch2Image from '../public/images/gallery/watch2.jpg'
import Link from 'next/link'
import Layout1 from "../components/Layout1"
export default function Home() {
  // Header Sticky
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.app-bar');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  return (
    <>
      {/* SECTION HOME START */}
      <div className="container">
        <section className="home" id="home">
          <div className="row">
            <div className="col info-home">
              <div className="text-home">
                <h4>Selamat Datang</h4>
                <h2>Ayo bagikan barang layak pakai kamu sekarang!</h2>
                <p>Kamu bingung ingin mendonasikan barang layak pakai kamu kemana? Tenaaang!, sekarang kamu bisa bagiin barang barang kamu di sini.</p>
                <Link className="btn-style outer-shadow inner-shadow hover-in-shadow" href="/registrasi">Mulai</Link>
                <a className="detail" href="#about">Detail</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-home">
                <Image
                  src={heroImage}
                  alt="Hero Image"
                  className='img-fluid'
                  loading='eager'
                  priority

                >
                </Image>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* SECTION HOME END */}

      {/* SECTION ABOUT START */}
      <div className="container">
        <section className="about" id="about">
          <h2 style={{ fontWeight: 'bold' }} className="text-center">Tentang <span style={{ color: '#73a700' }} >DiBagi.in</span>
          </h2>
          <div className="row">
            <div className="col-md-6">
              <div className="img-about">
                <Image
                  src={aboutImage}
                  className='img-fluid'
                  alt="About Image"
                >
                </Image>
              </div>
            </div>
            <div className="col-md-6 info-about">
              <div className="text-about">
                <h3>Platform Berbagi Barang Layak Pakai</h3>
                <p>DiBagi.in merupakan suatu platform berbagi barang layak pakai yang ditujukan bagi korban bencana yang sangat membutuhkan bantuan barang layak pakai dari donatur yang selalu sedia mendonasikan barang mereka melalui platform dibagi.in, Platform ini sebagai perantara atau penghubung antara donatur dengan para korban bencana. <br /> Cara kerja aplikasi ini sangat sederhana, Donatur cukup memotret barang layak pakai mereka di platform dibagi.in kemudian pada korban bencana yang membutuhkan barang cukup klik ambil pada dashboard dibagi.in </p>
                <a className="btn-style outer-shadow inner-shadow hover-in-shadow" href="#">Mulai Sekarang!</a>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="share-box p-3 outer-shadow">
                <h3 className="text-center"><i className="fas fa-box"></i> Cara Memposting Barang Donasi</h3>
                <div className="share-stuff">
                  <ul>
                    <li>Masuk ke halaman dashboard terlebih dahulu.</li>
                    <li>Pilih menu upload barang.</li>
                    <li>isi detail barang, lalu klik posting.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="share-box p-3 outer-shadow">
                <h3 className="text-center"><i className="fa-solid fa-hand-holding-heart"></i> Cara Mengambil Barang Donasi</h3>
                <div className="share-stuff">
                  <ul>
                    <li>Masuk ke halaman dashboard terlebih dahulu.</li>
                    <li>Klik menu daftar barang.</li>
                    <li>Apabila sudah menemukan barang yang sesuai kemudian klik ambil.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* SECTION ABOUT END */}

      {/* SECTION FAQ START */}
      <div className="container">
        <section className="about" id="faq">
          <h2 style={{ fontWeight: 'bold' }} className="text-center">Yang Sering <span style={{ color: '#73a700' }} >Ditanyakan</span>
          </h2>
          <div className="row">
            <div className="col-md-6">
              <div className="img-about">
                <Image
                  src={faqImage}
                  className='img-fluid'
                  alt="FAQ Image"
                >
                </Image>
              </div>
            </div>
            <div className="col-md-6 info-about">
              <div className="text-about">

                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span style={{ color: '#73a700' }} >Apa itu DiBagi.in?</span>
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body"> DiBagi.in merupakan suatu platform berbagi barang layak pakai yang ditujukan bagi korban bencana yang sangat membutuhkan bantuan barang layak pakai dari donatur yang selalu sedia mendonasikan barang mereka melalui platform dibagi.in, Platform ini sebagai perantara atau penghubung antara donatur dengan para korban bencana. </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span style={{ color: '#73a700' }} >Bagaimana cara memberikan donasi?</span>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <ul>
                          <li>Masuk ke halaman dashboard terlebih dahulu.</li>
                          <li>Pilih menu upload barang.</li>
                          <li>isi detail barang seperti nama barang, foto barang, lalu klik posting.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span style={{ color: '#73a700' }} >Bagaimana cara menerima donasi?</span>
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <ul>
                          <li>Masuk ke halaman dashboard terlebih dahulu.</li>
                          <li>Klik menu daftar barang.</li>
                          <li>Apabila sudah menemukan barang yang sesuai kemudian klik ambil.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
      {/* SECTION FAQ END */}

      {/* SECTION TEAM START */}
      <div className="container mt-2">
        <section className="our-team" id="our-team">
          <h2 className="team-title text-center">Tim <span>Kami</span>
          </h2>
          <div className="row row-team mt-4">
            <div className="team-card">
              <div className="image">
                <Image
                  src={yudaImage}
                  title="Yuda Anugrah"
                  className='img-fluid'
                  alt="Yuda Anugrah"
                >
                </Image>
              </div>
              <div className="caption">
                <h4>Yuda Anugrah</h4>
                <p>Front-end Developer</p>
                <div className="sosmed">
                  <a href="https://www.linkedin.com/in/yuda-anugrah-6314bb24b/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/Yyuud1" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.instagram.com/yudagrh_/?hl=id" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="image">
                <Image
                  src={suryaImage}
                  title="Surya Maulana Saputra"
                  className='img-fluid'
                  alt="Surya"
                >
                </Image>
              </div>
              <div className="caption">
                <h4>Surya Saputra</h4>
                <p>Back-end Developer</p>
                <div className="sosmed">
                  <a href="https://www.linkedin.com/in/surya-maulana-saputra/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/suryaasaputra/" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.instagram.com/suryaa_saputra/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="image">
                <Image
                  src={arifImage}
                  title="Arif Rizqi"
                  className='img-fluid'
                  alt="Arif"
                >
                </Image>
              </div>
              <div className="caption">
                <h4>Arif Rizqi</h4>
                <p>Front-end Developer</p>
                <div className="sosmed">
                  <a href="https://www.linkedin.com/in/arif-rizqi-58543221a/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/arifrizqi" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.instagram.com/arif_rizqi27/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="image">
                <Image
                  src={annasImage}
                  title="Annas Setiawan"
                  className='img-fluid'
                  alt="Annas"
                >
                </Image>
              </div>
              <div className="caption">
                <h4>Annas Setiawan</h4>
                <p>Front-end Developer</p>
                <div className="sosmed">
                  <a href="https://www.linkedin.com/in/annas-setiawan-9271a7234/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/annassetywn" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.instagram.com/annassetywn/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >
      {/* SECTION TEAM END */}

      {/* SECTION GALLERY START */}
      <div className='container mb-5'>
        <section className='gallery mt-5' id='gallery'>
          <h2 className="gallery-title text-center">Gallery</h2>

          <div className="row row-button-gallery mt-3">
                <div className="button-gallery">
                    <ul className="filter-button">
                        <li className="list active" data-filter="all">All</li>
                        <li className="list" data-filter="buku">Buku</li>
                        <li className="list" data-filter="kotak">Kotak</li>
                        <li className="list" data-filter="jam">Jam</li> 
                        <li className="list" data-filter="sepatu">Sepatu</li> 
                    </ul>
                </div>
          </div>

          <div className="row row-gallery-item mt-3">
                <div className="gallery-item">

                    <div className="item buku">
                        <Image
                          src={buku1Image}
                          title="buku"
                          className='img-fluid'
                          alt="buku"
                         >
                        </Image>
                        <p className="mt-1">Sebuah buku</p>
                    </div>

                    <div className="item buku">
                        <Image
                          src={buku2Image}
                          title="buku"
                          className='img-fluid'
                          alt="buku"
                         >
                        </Image>
                        <p className="mt-1">Sebuah buku</p>
                    </div>

                    <div className="item kotak">
                        <Image
                          src={kotak1Image}
                          title="kotak"
                          className='img-fluid'
                          alt="kotak"
                         >
                        </Image>
                        <p className="mt-1">Sebuah kotak</p>
                    </div>

                    <div className="item jam">
                        <Image
                          src={watch1Image}
                          title="jam"
                          className='img-fluid'
                          alt="jam"
                         >
                        </Image>
                        <p className="mt-1">Sebuah jam</p>
                    </div>

                    <div className="item jam">
                        <Image
                          src={watch2Image}
                          title="jam"
                          className='img-fluid'
                          alt="jam"
                         >
                        </Image>
                        <p className="mt-1">Sebuah jam</p>
                    </div>

                    <div className="item sepatu">
                        <Image
                          src={shoes1Image}
                          title="sepatu"
                          className='img-fluid'
                          alt="sepatu"
                         >
                        </Image>
                        <p className="mt-1">Sebuah sepatu</p>
                    </div>
                    
                    <div className="item sepatu sepatu2">
                        <Image
                          src={shoes2Image}
                          title="sepatu"
                          className='img-fluid'
                          alt="sepatu"
                         >
                        </Image>
                        <p className="mt-1">Sebuah sepatu</p>
                    </div>

                </div>
            </div>
        </section>
      </div>
      {/* SECTION GALLERY END */}
    </>
  )
}
Home.getLayout = function getLayout(page) {
  return (
    <Layout1>
      {page}
    </Layout1>
  )
}
