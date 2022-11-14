const Daftar = {
  // eslint-disable-next-line no-empty-function
  async render() {
    return `
    <div class="container mt-3">
    <div class="card register-form">             
        <div class="card-body">
          <h2 class="card-title text-center">Daftar</h2>

          <form>
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">Email*</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="you@email.com" required>
            </div>
            <div class="mb-4">
                <label for="exampleInputusername1" class="form-label">Username*</label>
                <input type="username" class="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" placeholder="Username" required>
              </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password*</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="*****" required>
            </div>

            <div class="mb-4">
                <label for="exampleInputEmail1" class="form-label">Jenis Kelamin*</label><br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">Pria</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Wanita</label>
                  </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputWhatsApp1" class="form-label">No. WhatsApp*</label>
                <input type="text" class="form-control" id="exampleInputWhatsApp1" placeholder="08123468798" required>
              </div>
              <div class="mb-3">
                <label for="exampleInputNamaLengkap1" class="form-label">Nama Lengkap*</label>
                <input type="text" class="form-control" id="exampleInputNamaLengkap1" placeholder="Jhon Doe" required>
              </div>
              <div class="mb-3">
                <label for="exampleInputAlamat1" class="form-label">Alamat*</label>
                <input type="text" class="form-control" id="exampleInputAlamat1" placeholder="Jl. Garuda No. 76 Jakarta Selatan" required>
              </div>


            <div class="d-grid mt-5">
                <button type="submit" class="btn btn-register">Daftar</button>
            </div>

            <div class="mt-3">
                <label>Sudah punya akun ? <a href="#/login" class="link">Masuk</a></label>
            </div>
          </form>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
  },
};

export default Daftar;
