import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from "next/router";
import { donationService } from '../../services';
import DonasiCard from '../../components/DonasiCard';
import Layout2 from "../../components/Layout2";
import SkeletonLoading from "../../components/SkeletonLoading";
import empty from '../../public/images/empty.png';

const Donasi = () => {
	const router = useRouter()
	const { cari } = router.query
	//fetch donation list
	const { listDonations, isLoading, mutate } = donationService.searchByKeyword(cari)
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
						<title>Cari Donasi - Dibagiin</title>
					</Head>

					<div className="mt-5">
						<h2 className=" text-decoration-underline">Hasil Pencarian<b> {cari}</b></h2>
					</div>
					{!listDonations.data.length && (
						<div className="d-flex flex-column justify-content-center mt-5 align-items-center">
							<h3>Tidak ada Hasil</h3>
							<Image
								src={empty}
								width={400}
								alt="Empty"
								className='img-fluid'
								loading='eager'
								priority
							/>

						</div>
					)
					}

					{listDonations.data.map((item) => (
						<DonasiCard key={item.id} item={item} mutate={mutate} keyword={cari} />
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