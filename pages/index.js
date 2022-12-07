/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import heroImage from '../public/images/heros/hero-image.png';
import aboutImage from '../public/images/about-img.png';
import faqImage from '../public/images/faq.png';
import whyusImage from '../public/images/why-us.png';
import arifImage from '../public/images/teams/arif.jpg';
import suryaImage from '../public/images/teams/surya.jpg';
import annasImage from '../public/images/teams/annas.jpg';
import yudaImage from '../public/images/teams/yuda.jpeg';
import buku1Image from '../public/images/gallery/buku1.jpg';
import buku2Image from '../public/images/gallery/buku2.jpg';
import kotak1Image from '../public/images/gallery/kotak1.jpg';
import shoes1Image from '../public/images/gallery/shoes1.jpg';
import shoes2Image from '../public/images/gallery/shoes2.jpg';
import watch1Image from '../public/images/gallery/watch1.jpg';
import watch2Image from '../public/images/gallery/watch2.jpg';
import selimut1Image from '../public/images/gallery/selimut1.jpg';
import selimut2Image from '../public/images/gallery/selimut2.jpg';
import baju1Image from '../public/images/gallery/baju1.jpg';
import baju2Image from '../public/images/gallery/baju2.jpg';
import baju3Image from '../public/images/gallery/baju3.jpg';
import Link from 'next/link';
import Layout1 from "../components/Layout1";
export default function Home() {

  // inisialisasi AOS (Animation on Scroll)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Filter feature for gallery
  const galleryFilter = e => {
    const filterButtonContainer = document.querySelector(".filter-button");
    const galleryItems = document.querySelectorAll(".item");

    if (e.target.classList.contains('list')) {
      filterButtonContainer.querySelector('.active').classList.remove('active');

      e.target.classList.add('active');
      const filterValue = e.target.getAttribute('data-filter');
      galleryItems.forEach(item => {
        if (item.classList.contains(filterValue) || filterValue === 'all') {
          item.classList.remove('hide');
          item.classList.add('show');
        } else {
          item.classList.remove('show');
          item.classList.add('hide');
        }
      });
    }
  };

  return (
    <>
      {/* SECTION HOME START */}
      <div className="container">
        <Head>
          <title>Dibagiin</title>
        </Head>
        <section className="home" id="home">
          <div className="row">
            <div className="col-md-6 info-home" data-aos="fade-up">
              <div className="text-home">
                <h4>
                  <Typewriter
                    options={{
                      strings: ['Halo, Selamat Datang'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h4>
                <h2 data-aos="zoom-in">Ayo bagikan barang layak pakai kamu sekarang!</h2>
                <p>Kamu bingung ingin mendonasikan barang layak pakai kamu kemana? Tenaaang!, sekarang kamu bisa bagiin barang barang kamu di sini.</p>
                <Link className="btn-style outer-shadow inner-shadow hover-in-shadow" href="/masuk">Mulai</Link>
                <a className="btn-style outer-shadow inner-shadow hover-in-shadow ms-3" href="#about">Detail</a>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
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
      <div className="container" style={{ marginTop: '5rem' }}>
        <section className="about" id="about">
          <h2 style={{ fontWeight: 'bold' }} data-aos="fade-up" data-aos-once="true" data-aos-duration="500" className="text-center">Tentang <span style={{ color: '#73a700' }} >Dibagiin</span>
          </h2>
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-once="true">
              <div className="img-about">
                <Image
                  src={aboutImage}
                  className='img-fluid'
                  alt="About Image"
                >
                </Image>
              </div>
            </div>
            <div className="col-md-6 info-about" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
              <div className="text-about">
                <h3>Aplikasi Berbagi Barang Layak Pakai</h3>
                <p><span style={{ color: '#73a700' }} >Dibagiin</span> merupakan suatu Aplikasi berbagi barang layak pakai yang ditujukan bagi korban bencana yang sangat membutuhkan bantuan barang layak pakai dari donatur yang selalu sedia mendonasikan barang mereka melalui Aplikasi <span style={{ color: '#73a700' }} >Dibagiin</span>, Aplikasi ini sebagai perantara atau penghubung antara donatur dengan para korban bencana. <br /> Cara kerja aplikasi ini sangat sederhana, Donatur cukup memotret barang layak pakai mereka di Aplikasi <span style={{ color: '#73a700' }} >Dibagiin</span> kemudian pada korban bencana yang membutuhkan barang cukup klik ambil pada dashboard <span style={{ color: '#73a700' }} >Dibagiin</span> </p>
                <Link className="btn-style outer-shadow inner-shadow hover-in-shadow" href="/masuk">Mulai Sekarang!</Link>
              </div>
            </div>
            <div className="col-md-6 mt-5" data-aos="fade-up" data-aos-once="true">
              <div className="share-box p-3 outer-shadow">
                <h3 className="text-center"><i className="fas fa-box"></i> Cara Memposting Barang Donasi</h3>
                <div className="share-stuff">
                  <ul>
                    <li>Masuk ke halaman beranda terlebih dahulu.</li>
                    <li>Kemudian klik atau pilih tombol "Buat Donasi" untuk membuat atau mengupload donasi baru</li>
                    <li>isi form untuk barang yang mau didonasikan, lalu klik tombol "Buat".</li>
                    <li>Selesai, donasi berhasil dibuat</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              <div className="share-box p-3 outer-shadow">
                <h3 className="text-center"><i className="fa-solid fa-hand-holding-heart"></i> Cara Mengambil Barang Donasi</h3>
                <div className="share-stuff">
                  <ul>
                    <li>Masuk ke halaman beranda terlebih dahulu.</li>
                    <li>Lalu pilih barang yang mau diambil dengan mengklik tombol "Ajukan Permintaan" terlebih dahulu</li>
                    <li>Tunggu sampai barang dikonfirmasi orang tersebut</li>
                    <li>Selesai, barang dapat diambil</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* SECTION ABOUT END */}

      {/* SECTION FAQ START */}
      <div className="container" style={{ marginTop: '5rem' }}>
        <section className="about" id="faq">
          <h2 style={{ fontWeight: 'bold' }} data-aos="fade-up" data-aos-once="true" data-aos-duration="500" className="text-center">Yang Sering <span style={{ color: '#73a700' }} >Ditanyakan</span>
          </h2>
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-once="true">
              <div className="img-about">
                <Image
                  src={faqImage}
                  className='img-fluid'
                  alt="FAQ Image"
                />
              </div>
            </div>
            <div className="col-md-6 info-about" data-aos-once="true" data-aos="fade-up" data-aos-delay="100">
              <div className="text-about">

                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span style={{ color: '#73a700' }} >Apa itu <span style={{ color: '#73a700' }} >Dibagiin</span>?</span>
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body"> <span style={{ color: '#73a700' }} >Dibagiin</span> merupakan suatu Aplikasi berbagi barang layak pakai yang ditujukan bagi korban bencana yang sangat membutuhkan bantuan barang layak pakai dari donatur yang selalu sedia mendonasikan barang mereka melalui Aplikasi <span style={{ color: '#73a700' }} >Dibagiin</span>, Aplikasi ini sebagai perantara atau penghubung antara donatur dengan para korban bencana. </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span style={{ color: '#73a700' }} >Bagaimana cara edit profil</span>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <ul>
                          <li>Masuk ke halaman beranda terlebih dahulu.</li>
                          <li>Pilih menu "Profil" atau icon di navbar sebelah kanan</li>
                          <li>Kemudian klik tombol "Edit Profil"</li>
                          <li>isi form untuk mengedit profil lalu klik tombol "simpan"</li>
                          <li>Selesai, profil berhasil di edit</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span style={{ color: '#73a700' }} >Bagaimana cara memberikan donasi?</span>
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <ul>
                          <li>Masuk ke halaman beranda terlebih dahulu.</li>
                          <li>Kemudian klik atau pilih tombol "Buat Donasi" untuk membuat atau mengupload donasi baru</li>
                          <li>isi form untuk barang yang mau didonasikan, lalu klik tombol "Buat".</li>
                          <li>Selesai, donasi berhasil dibuat</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <span style={{ color: '#73a700' }} >Bagaimana cara mengambil donasi?</span>
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <ul>
                          <li>Masuk ke halaman beranda terlebih dahulu.</li>
                          <li>Lalu pilih barang yang mau diambil dengan mengklik tombol "Ajukan Permintaan" terlebih dahulu</li>
                          <li>Tunggu sampai barang dikonfirmasi orang tersebut</li>
                          <li>Selesai, barang dapat diambil</li>
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

      {/* SECTION WHY CHOOSE US START */}

      <div className='container mb-5' style={{ marginTop: '5rem' }}>
        <section className="why-us">
          <div className="why-us-title">
            <h2 style={{ fontWeight: 'bold' }} data-aos="fade-up" data-aos-once="true" data-aos-duration="500" className="text-center">Kenapa Memilih <span style={{ color: '#73a700' }} >Kami</span>
            </h2>
          </div>
          <div className="why-us-title-desc" data-aos-once="true" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="150">
            <p className="text-center">Dibagiin sebagai Aplikasi berbagi yang membantu anda menyalurkan barang layak pakai kepada orang lain yang membutuhkan ingin memberikan pelayanan yang terbaik kepada anda dengan alasan yang kuat.</p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
              {/* <img src="why-us.png" alt="img" className="img-fluid"> */}
              <Image
                width={430}
                height={430}
                src={whyusImage}
                className='img-fluid img-why-us'
                alt="Why Choose Us"
              />
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-once="true" data-aos-delay="120">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="wu-box mb-3">
                    <div className="wu-text-box-icon">
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="wu-text-box-title">
                      <h5>Mudah Digunakan</h5>
                    </div>
                    <div className="wu-text-box-desc">
                      <p>Tampilan website kami desain dengan memperhatikan kemudahan anda dalam menggunakan aplikasi kami.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="wu-box">
                    <div className="wu-text-box-icon">
                      <i className="fa-solid fa-rss"></i>
                    </div>
                    <div className="wu-text-box-title">
                      <h5>Gratis</h5>
                    </div>
                    <div className="wu-text-box-desc">
                      <p>Semua layanan yang kami tawarkan pada aplikasi dapat anda gunakan secara gratis.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6 col-md-6">
                  <div className="wu-box mb-3">
                    <div className="wu-text-box-icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className="wu-text-box-title">
                      <h5>Dukungan Handal</h5>
                    </div>
                    <div className="wu-text-box-desc">
                      <p>Kami menyediakan kontak tim yang dapat anda hubungi apabila membutuhkan bantuan.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="wu-box">
                    <div className="wu-text-box-icon">
                      <i className="fa-solid fa-globe"></i>
                    </div>
                    <div className="wu-text-box-title">
                      <h5>Jangkauan Luas</h5>
                    </div>
                    <div className="wu-text-box-desc">
                      <p>Anda dapat mendonasikan dan mengambil barang dari seluruh kota di wilayah Indonesia.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION WHY CHOOSE US END */}

      {/* SECTION GALLERY START */}
      <div className='container mb-5' style={{ marginTop: '5rem' }}>
        <section className='gallery mt-5' id='gallery'>
          <h2 className="gallery-title text-center" data-aos-once="true" data-aos="fade-up" data-aos-duration="500">Contoh Barang Yang <span style={{ color: '#73a700' }} >Didonasikan</span></h2>

          <div className="row row-button-gallery mt-3">
            <div className="button-gallery" data-aos="fade-up" data-aos-once="true" data-aos-duration="500" data-aos-delay="150">
              <ul className="filter-button">
                <li className="list active" onClick={galleryFilter} data-filter="all">Semua</li>
                <li className="list" onClick={galleryFilter} data-filter="buku">Buku</li>
                <li className="list" onClick={galleryFilter} data-filter="kotak">Baju</li>
                <li className="list" onClick={galleryFilter} data-filter="jam">Selimut</li>
                <li className="list" onClick={galleryFilter} data-filter="sepatu">Sepatu</li>
              </ul>
            </div>
          </div>

          <div className="row row-gallery-item mt-3" data-aos="fade-up" data-aos-once="true">
            <div className="gallery-item">

              <div className="item buku">
                <Image
                  src={buku1Image}
                  title="buku"
                  className='img-fluid img'
                  style={{ transition: '0.3s' }}
                  alt="buku"
                >
                </Image>
                <p className="mt-1">Buku Bacaan Campuran</p>
              </div>

              <div className="item buku">
                <Image
                  src={buku2Image}
                  title="buku"
                  className='img-fluid img'
                  style={{ transition: '0.3s' }}
                  alt="buku"
                >
                </Image>
                <p className="mt-1">Buku Bahasa Inggris</p>
              </div>

              <div className="item kotak">
                <Image
                  src={baju1Image}
                  title="kotak"
                  className='img-fluid img'
                  style={{ transition: '0.3s' }}
                  alt="kotak"
                >
                </Image>
                <p className="mt-1">Baju Kemeja dan Kaos</p>
              </div>
              <div className="item kotak">
                <Image
                  src={baju2Image}
                  title="kotak"
                  className='img-fluid img'
                  style={{ transition: '0.3s' }}
                  alt="kotak"
                >
                </Image>
                <p className="mt-1">Baju Biasa</p>
              </div>
              <div className="item kotak">
                <Image
                  src={baju3Image}
                  title="kotak"
                  className='img-fluid img'
                  style={{ transition: '0.3s' }}
                  alt="kotak"
                >
                </Image>
                <p className="mt-1">Baju Perempuan</p>
              </div>

              <div className="item jam">
                <Image
                  src={selimut1Image}
                  title="jam"
                  className='img-fluid img'
                  style={{ transition: '0.3s' }}
                  alt="jam"
                >
                </Image>
                <p className="mt-1">Selimut Tebal</p>
              </div>

              <div className="item jam">
                <Image
                  src={selimut2Image}
                  title="jam"
                  className='img-fluid img'
                  style={{ transition: '0.3s' }}
                  alt="jam"
                >
                </Image>
                <p className="mt-1">Selimut Hangat</p>
              </div>

              <div className="item sepatu">
                <Image
                  src={shoes1Image}
                  title="sepatu"
                  className='img-fluid img'
                  style={{ transition: '0.3s' }}
                  alt="sepatu"
                >
                </Image>
                <p className="mt-1">Sepatu Sneakers Bekas</p>
              </div>

              <div className="item sepatu">
                <Image
                  src={shoes2Image}
                  title="sepatu"
                  className='img-fluid img'
                  style={{ transition: '0.3s' }}
                  alt="sepatu"
                >
                </Image>
                <p className="mt-1">Sepatu Sneakers Merah</p>
              </div>

            </div>
          </div>
        </section>
      </div>
      {/* SECTION GALLERY END */}

      {/* SECTION TEAM START */}
      <div className="container mb-5" style={{ marginTop: '5rem' }}>
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
