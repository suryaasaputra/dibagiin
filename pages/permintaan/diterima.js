import Head from 'next/head';
import Link from 'next/link';
import Swal from "sweetalert2";
import nookies from 'nookies';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from 'next/image';
import { donationService } from '../../services';
import Layout2 from "../../components/Layout2";
import PermintaanDiterimaCard from '../../components/PermintaanDiterimaCard';

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
        <div className="mt-3 pt-3 beranda ">
            <div className="container-fluid p-3">
                <Head>
                    <title>Permintaan diterima-Dibagiin</title>
                </Head>
                <div className='mt-5'><h2>Permintaan diterima</h2></div>
                {!data && (
                    <div className="row m-5"><h2>Belum ada data</h2></div>
                )
                }

                {listRequest.data.map((item) => (
                    <>
                        <PermintaanDiterimaCard key={item.id} item={item} />
                    </>
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