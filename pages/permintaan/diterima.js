import Head from 'next/head';
import Link from 'next/link';
import Swal from "sweetalert2";
import nookies from 'nookies'
import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from 'next/image';
import { donationService } from '../../services';
import Layout2 from "../../components/Layout2";

const Diterima = () => {

    //fetch daftar permintaan
    const { listRequest, isLoading } = donationService.getAllRequest()
    if (isLoading) return (<div className="mt-3 pt-3 beranda">
        <div className="container-fluid">
            <p>loading...</p>
            <span className="spinner-border spinner-border-sm mr-1"></span>
        </div>
    </div>)

    if (listRequest.error) {
        return (
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    {listRequest.message}
                </div>
            </div>
        )
    }
    const data = listRequest.data.length
    return (
        <div className="mt-3 pt-3 beranda">
            <div className="container-fluid">
                <Head>
                    <title>Permintaan diterima-Dibagiin</title>
                </Head>

                {!data && (
                    <div className="row m-5"><h2>Belum ada data</h2></div>
                )
                }
                {listRequest.data.map((item) => (
                    <div className="row m-5">
                        <div className="col-md-12 p-5 mb-3 outer-shadow rounded-2">
                            <div className="row ">
                                <div className='col-4'>
                                    <Image
                                        width={80}
                                        height={80}
                                        src={item.user.profil_photo_url}
                                        className="img-fluid rounded-circle"
                                        alt='avatar'
                                    />
                                </div>
                                <div className='col-8'>
                                    <div className="row ">
                                        <p><Link href={`/user/${item.user.user_name}`}> <b>{item.user.full_name}</b></Link> meminta <Link href={`/donasi/${item.donation.id}`}> <b>{item.donation.title}</b></Link></p>
                                    </div>
                                    <div className="row ">
                                        <p className='text-end'>Pada : {new Date(item.created_at).toLocaleTimeString('id-ID', {
                                            day: 'numeric', // numeric, 2-digit
                                            year: 'numeric', // numeric, 2-digit
                                            month: 'long', // numeric, 2-digit, long, short, narrow
                                            hour: 'numeric', // numeric, 2-digit
                                            minute: '2-digit', // numeric, 2-digit
                                        })}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className='col-12'>
                                    <p className=' fw-bold'>"{item.message}"</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className='col-12'>
                                    <button
                                        className='btn-style outer-shadow inner-shadow hover-in-shadow ms-2'
                                    >
                                        Konfirmasi
                                    </button>
                                    <button
                                        className='btn-style outer-shadow inner-shadow hover-in-shadow ms-2'
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

Diterima.getLayout = function getLayout(page) {
    return (
        <Layout2>
            {page}
        </Layout2>
    )
}


export default Diterima