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

        <!-- SECTION FAQ START -->
        <div class="container">
    <section class="about" id="faq">
      <h2 style="font-weight: bold;" class="text-center">Yang Sering <span style="color: var(--green);">Ditanyakan</span></h2>
      <div class="row">
          <div class="col-md-6">
              <div class="img-about">
                  <img src="./images/faq.png" alt="about img">
              </div>
          </div>
          <div class="col-md-6 info-about">
              <div class="text-about">
              <!-- SECTION ACCORDION START -->
              <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span style="color: var(--green);">Apa itu DiBagi.in?</span>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span style="color: var(--green);">Bagaimana cara memberikan donasi?</span>
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <span style="color: var(--green);">Bagaimana cara menerima donasi?</span>
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
              <!-- SECTION ACCORDION END -->
              </div>
          </div>
        </div>               
    </section>
</div>
        <!-- SECTION FAQ END -->

        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
