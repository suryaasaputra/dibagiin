import Link from "next/link";
import Head from 'next/head';
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { userService } from "../../services";
import Layout1 from "../../components/Layout1";
export default function Masuk() {

  const router = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push('/beranda');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // form validation rules 
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Alamat email tidak valid").required('Email tidak boleh kosong'),
    password: Yup.string().required('Kata sandi tidak boleh kosong')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ email, password }) {
    return userService.login(email.toLowerCase(), password)
      .then((response) => {

      })
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || '/beranda';
        router.push(returnUrl);
      })
      .catch(error => {
        setError('apiError', { message: error });
      });
  }
  return (
    <>
      <div className="container mt-3 mb-5">
        <Head>
          <title>Masuk-Dibagiin</title>
        </Head>
        <div className="login-form rounded-2">
          <div className="card-body">
            <h3 className="card-title text-center">Masuk</h3>

            <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label"><i className="fa fa-envelope"></i> Email</label>
                <input type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" aria-describedby="emailHelp" placeholder="raisa@gmail.com" />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label"><i className="fa fa-key"></i> Kata Sandi</label>
                <input type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" placeholder="*****" autoComplete="on" />
                <div className="invalid-feedback">{errors.password?.message}</div>
              </div>

              {/* <div className="d-flex justify-content-between">
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Ingat saya</label>
                </div>

                <div>
                  <Link href="#" className="link">Lupa Password ?</Link>
                </div>
              </div> */}

              <div className="d-grid mt-5">
                <button disabled={formState.isSubmitting} type="submit" className="btn btn-login">
                  {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                  Masuk
                </button>
              </div>
              {errors.apiError &&
                <div className="alert alert-danger mt-3 mb-0">{errors.apiError?.message}</div>
              }
              <div className="mt-3">
                <label>Belum Punya Akun ? <Link href="/registrasi" className="link">Daftar</Link></label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
Masuk.getLayout = function getLayout(page) {
  return (
    <Layout1>
      {page}
    </Layout1>
  )
}