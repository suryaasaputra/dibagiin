const Login = {
  async render() {
    return `
    <div class="container mt-3">
    <div class="card login-form">             
        <div class="card-body">
          <h2 class="card-title text-center">Masuk</h2>

          <form>
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">Email*</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="you@email.com" required>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password*</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="*****" required>
            </div>

            <div class="d-flex justify-content-between">
                <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Ingat saya</label>
                </div>

                <div>
                    <a href="#" class="link">Lupa Password ?</a>
                </div>
            </div>

            <div class="d-grid mt-5">
                <button type="submit" class="btn btn-login">Masuk</button>
            </div>

            <div class="mt-3">
                <label>Belum Punya Akun ? <a href="#/daftar" class="link">Daftar</a></label>
            </div>
          </form>
        </div>
      </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Login;
