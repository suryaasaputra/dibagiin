const Home = {
  async render() {
    return `
    <!-- SECTION HOME START -->
    <div class="container">
      <section class="home" id="home"> 
        <div class="row">
         <div class="col info-home">
              <div class="text-home">
                  <h4>Selamat Datang</h4>
                  <h2>Ayo bagikan barang layak pakai kamu sekarang!</h2>
                  <p>Kamu bingung ingin mendonasikan barang layak pakai kamu kemana? Tenaaang!, sekarang kamu bisa bagiin barang barang kamu di sini.</p>
                  <a class="btn-style outer-shadow inner-shadow hover-in-shadow" href="#">Mulai</a>
                  <a class="detail" href="#about">Detail</a>
              </div>
          </div>

         <div class="col-md-6">
              <div class="img-home">
                  <img src="./images/heros/hero-image.png" alt="hero img">
              </div>
          </div>

        </div>    
      </section>
    </div>
    <!-- SECTION HOME END -->

     <!-- SECTION ABOUT START -->
    <div class="container">
    <section class="about" id="about">
      <h2 style="font-weight: bold;" class="text-center">Tentang <span style="color: var(--green);">DiBagi.in</span></h2>
      <div class="row">
          <div class="col-md-6">
              <div class="img-about">
                  <img src="./images/about-img.png" alt="about img">
              </div>
          </div>
          <div class="col-md-6 info-about">
              <div class="text-about">
                  <h3>Platform Berbagi Barang Layak Pakai</h3>
                  <p>DiBagi.in merupakan suatu platform berbagi barang layak pakai yang ditujukan bagi korban bencana yang sangat membutuhkan bantuan barang layak pakai dari donatur yang selalu sedia mendonasikan barang mereka melalui platform dibagi.in, Platform ini sebagai perantara atau penghubung antara donatur dengan para korban bencana.<br/>
                  Cara kerja aplikasi ini sangat sederhana, Donatur cukup memotret barang layak pakai mereka di platform dibagi.in kemudian pada korban bencana yang membutuhkan barang cukup klik ambil pada dashboard dibagi.in </p>
                  <a class="btn-style outer-shadow inner-shadow hover-in-shadow" href="#">Mulai Sekarang!</a>
              </div>
          </div>
          <div class="col-md-6 mt-5">
              <div class="share-box p-3 outer-shadow">
                <h3 class="text-center"><i class="fas fa-box"></i> Cara Memposting Barang Donasi</h3>
                <div class="share-food">
                  <ul>
                      <li>Masuk ke halaman dashboard terlebih dahulu.</li>
                      <li>Pilih menu upload barang.</li>
                      <li>isi detail barang, lalu klik posting.</li>
                  </ul>
                </div>
              </div>
          </div>
          <div class="col-md-6 mt-5">
              <div class="share-box p-3 outer-shadow">
                <h3 class="text-center"><i class="fa-solid fa-hand-holding-heart"></i> Cara Mengambil Barang Donasi</h3>
                <div class="share-stuff">
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
        <!-- SECTION ABOUT END -->
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
