import Head from 'next/head';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import $ from 'jquery'
import Layout2 from "../components/Layout2";
import { useEffect, useRef, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { usePlacesWidget } from "react-google-autocomplete";
// import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

import { parseCookies } from "nookies";
import { userService } from "../services";


const Tes = () => {
    const [value, setValue] = useState(null);
    const [location, setLocation] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [currenLocation, setcurrenLocation] = useState(null);
    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {

                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setcurrenLocation(pos)
                }
            );
        } else {
            console.log("Browser doesn't support Geolocation")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // useEffect(() => {
    //     if (currenLocation) {


    //         const center = {
    //             lat: -3.745,
    //             lng: -38.523
    //         };
    //         //     const loader = new Loader({
    //         //         apiKey: process.env.NEXT_PUBLIC_API_KEY,
    //         //         version: 'weekly',

    //         //     });
    //         //     let map;
    //         //     loader.load().then(() => {
    //         //         const google = window.google
    //         //         map = new google.maps.Map(googlemap.current, {
    //         //             center: { lat: currenLocation.lat, lng: currenLocation.lng },
    //         //             zoom: 8,
    //         //         });
    //         //     });
    //     }
    // }, [location]);
    // const { ref: bootstrapRef } = usePlacesWidget({
    //     apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
    //     onPlaceSelected: (place) => {
    //         setLocation(place);
    //         setSelectedLocation(place.formatted_address)

    //     },
    //     language: 'id'
    // });


    const containerStyle = {
        width: '400px',
        height: '400px'
    };
    const API_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY;
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Nama Donasi tidak boleh kosong"),
        description: Yup.string().required("Deskripsi tidak boleh kosong"),
        location: Yup.string().required("Lokasi tidak boleh kosong"),
    })
    const formOptions = { resolver: yupResolver(validationSchema) }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState, setValue: setData, control } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        console.log(data)
        $('#result').html('')
        $('#result').append(`
        <p>Title : ${data.title}</p>
        <p>Description : ${data.description}</p>
        <p>Location : ${data.location}</p>
        `)
        $(':input', '#myform')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .prop('checked', false)
            .prop('selected', false);
    }

    function locationBTNHandle() {
        $('#current-location').html('')
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {

                    const pos = {

                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    $('#current-location').append(`
                        <p>Lat:${pos.lat}</p>
                        <p>Lng:${pos.lng}</p>
                    `)
                }
            );
        } else {
            console.log("Browser doesn't support Geolocation")
        }
    }

    return (
        <>
            <div className="mt-3 pt-3 beranda">
                <div className="container-fluid">
                    <Head>
                        <title>Tes-Dibagiin</title>
                    </Head>

                    <div className="row mt-5">
                        <div className="col-md-12">
                            <button onClick={locationBTNHandle} className='btn btn-secondary'>
                                Show currently location
                            </button>
                            <div id="current-location" className='card p-3 my-3'>

                            </div>
                            <div id="result" className='card p-3 my-3'>

                            </div>
                        </div>
                    </div>

                    <div className='p-5'>
                        <form onSubmit={handleSubmit(onSubmit)} id="myform">
                            <div className="mb-4">
                                <label htmlFor="title" className="form-label">
                                    Nama Donasi (maksimal 30 karakter)*
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.title ? "is-invalid" : ""
                                        }`}
                                    id="title"
                                    name='title'
                                    placeholder="Sepatu bekas "
                                    autoComplete='on'
                                    {...register("title")}
                                    maxLength="30"
                                />
                                <div className="invalid-feedback">
                                    {errors.title?.message}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="form-label">
                                    Deskripsi*
                                </label>
                                <input
                                    type="text"
                                    className={`text-deskripsi form-control ${errors.description ? "is-invalid" : ""}`}
                                    name="description"
                                    id="description"
                                    autoComplete='on'
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper metus vel tincidunt venenatis. Nunc faucibus quis augue a bibendum. Aenean eget porttitor est, ac auctor tortor. Curabitur tincidunt vehicula viverra. Praesent tincidunt tempus diam, sed interdum leo imperdiet non. Donec egestas, quam eget viverra lobortis, mi mi porta lacus, at malesuada metus ligula quis dui."
                                    {...register("description")}

                                />
                                <div className="invalid-feedback">{errors.description?.message}</div>
                            </div>

                            <div className="mb-4">
                                {/* <GooglePlacesAutocomplete
                                    apiKey={API_KEY}
                                    apiOptions={{ language: "id" }}
                                    selectProps={{
                                        value,
                                        onChange: setValue,
                                        placeholder: 'Masukkan Lokasi...',

                                    }}
                                /> */}
                                <label htmlFor="location" className="form-label">
                                    Lokasi*
                                </label>
                                <Controller
                                    name="location"
                                    control={control}
                                    rules={{ required: true }}
                                    render={() => <GooglePlacesAutocomplete
                                        apiKey={API_KEY}
                                        apiOptions={{ language: "id" }}
                                        selectProps={{
                                            value,
                                            onChange: setValue,
                                            placeholder: 'Masukkan Lokasi...',
                                            className: `form-control ${errors.location ? "is-invalid" : ""}`
                                        }}
                                    />}
                                />
                                {/* <input
                                    type="text"
                                    className={`form-control ${errors.location ? "is-invalid" : ""
                                        }`}
                                    id="location"
                                    name='location'
                                    autoComplete='on'
                                    placeholder="Jl. Garuda No. 76 Jakarta Selatan"
                                    {...register("location")}
                                    ref={bootstrapRef}
                                /> */}
                                <div className="invalid-feedback">
                                    {errors.location?.message}
                                </div>
                            </div>

                            {/* <div className="mb-4">
                                <GooglePlacesAutocomplete
                                    apiKey={API_KEY}
                                    apiOptions={{ language: "id" }}
                                    selectProps={{
                                        value,
                                        onChange: setValue,
                                        placeholder: 'Masukkan Lokasi...',
                                    }}
                                />
                            </div> */}


                            <div className="d-grid mt-5">
                                <button
                                    disabled={formState.isSubmitting}
                                    onClick={() => { setData('location', value?.label) }}
                                    type="submit"
                                    className="btn btn-login"
                                >
                                    {formState.isSubmitting && (
                                        <span className="spinner-border spinner-border-sm mr-1"></span>
                                    )}
                                    Buat
                                </button>
                            </div>
                            {errors.apiError && (
                                <div className="alert alert-danger mt-3 mb-0">
                                    {errors.apiError?.message}
                                </div>
                            )}
                        </form>
                        {/* <LoadScript
                            googleMapsApiKey={API_KEY}
                            libraries={["places"]}
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={currenLocation}
                                zoom={13}
                            >
                                <StandaloneSearchBox
                                    onLoad={onLoad}
                                    onPlacesChanged={
                                        onPlacesChanged
                                    }
                                >
                                    <input
                                        type="text"
                                        placeholder="Customized your placeholder"
                                        style={{
                                            boxSizing: `border-box`,
                                            border: `1px solid transparent`,
                                            width: `240px`,
                                            height: `32px`,
                                            padding: `0 12px`,
                                            borderRadius: `3px`,
                                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                            fontSize: `14px`,
                                            outline: `none`,
                                            textOverflow: `ellipses`,
                                            position: "absolute",
                                            left: "50%",
                                            marginLeft: "-120px"
                                        }}
                                    />
                                </StandaloneSearchBox>
                                
                    </GoogleMap>
                </LoadScript> */}
                    </div>
                </div>
            </div >


        </>
    )
}
Tes.getLayout = function getLayout(page) {
    return (
        <Layout2>
            {page}
        </Layout2>
    )
}

export default Tes




// Tes.getInitialProps = async (ctx) => {
//     const cookies = parseCookies(ctx);
//     const userData = JSON.parse(cookies.userCookies)
//     return { userData };
// }
// export async function getServerSideProps() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {

//                 const pos = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude,
//                 };
//                 return {
//                     props: {
//                         pos,
//                     },
//                 }
//             }
//         );
//     } else {
//         console.log("Browser doesn't support Geolocation")

//         const pos = {
//             lat: -6.200000,
//             lng: 106.816666,
//         };
//         return {
//             props: {
//                 pos,
//             },
//         }
//     }
    // const userData = userService.userData(ctx)
    // return {
    //     props: {
    //         userData,
    //     },
    // };

    // if (res) {
    //     if (Object.keys(data).length === 0 && data.constructor === Object) {
    //         res.writeHead(301, { Location: "/" })
    //         res.end()
    //     }
    // }

    // return {
    //     data: data && data,
    // }
// }