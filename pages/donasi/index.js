import Head from 'next/head';
import { useRouter } from "next/router";
import { donationService } from '../../services';
import DonasiCard from '../../components/DonasiCard';
import Layout2 from "../../components/Layout2";
import SkeletonLoading from "../../components/SkeletonLoading";


const Donasi = () => {
	const router = useRouter()
	const { cari } = router.query
	//fetch donation list
	const { listDonations, isLoading } = donationService.searchByTitle(cari)
	if (isLoading) return (
		<SkeletonLoading />
	)
	if (listDonations.error) {
		return (
			<div className="mt-3 pt-3 beranda">
				<div className="container-fluid p-3">
					{listDonations.message}
				</div>
			</div>
		)
	}

	return (
		<>
			<div className="mt-3 pt-3 beranda">
				<div className="container-fluid p-3">
					<Head>
						<title>Donasi-Dibagiin</title>
					</Head>

					<div className="mt-5">
						<h2 className=" text-decoration-underline">Hasil Pencarian<b> {cari}</b></h2>
					</div>
					{!listDonations.data.length && (
						<div className="row m-5"><h2>Tidak ada hasil</h2></div>
					)
					}

					{listDonations.data.map((item) => (
						<DonasiCard key={item.id} item={item} />
					))}

				</div>
			</div>
		</>
	);
}
Donasi.getLayout = function getLayout(page) {
	return (
		<Layout2>
			{page}
		</Layout2>
	)
}
// export async function getServerSideProps(ctx) {
// 	// Parse
// 	const cookies = nookies.get(ctx)
// 	const userData = JSON.parse(cookies.userCookies)
// 	const requestOptions = {
// 		method: "GET",
// 		headers: { "Authorization": `Bearer ${userData.token}` }
// 	}
// 	const endpoint = API_ENDPOINT.donation
// 	const res = await fetch(endpoint, requestOptions)
// 	const data = await res.json()
// 	const listDonations = data.data
// 	return {
// 		props: {
// 			listDonations,
// 		},
// 	};
// }

export default Donasi