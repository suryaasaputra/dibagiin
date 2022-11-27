import Head from 'next/head';
import Layout2 from "../../components/Layout2";

export default function Donasi() {
	return (
		<>
			<div className="mt-3 pt-3 beranda">
				<div className="container-fluid">
					<Head>
						<title>Donasi-Dibagiin</title>
					</Head>

					<div className="row mt-5">
						<div className="col-md-12">
							<h4 className="text-black-50">Donasi</h4>
						</div>
					</div>

					<div className="row">
						<div className="col-md-3 mb-3">
							<div className="p-3 card-beranda d-flex justify-content-around align-items-center rounded">
							<div className="card-body py-5">
								<h3 className="fs-2">1200</h3>
								<p className="fs-5 ">Barang</p>
							</div>
							<i style={{color: '#73a700'}} className="fas fa-book fs-1 primary-text border rounded-full secondary-bg p-3"></i>
							</div>
						</div>
						<div className="col-md-3 mb-3">
							<div className="p-3 card-beranda d-flex justify-content-around align-items-center rounded">
							<div className="card-body py-5">
								<h3 className="fs-2">500</h3>
								<p className="fs-5 ">Didonasikan</p>
							</div>
							<i style={{color: '#73a700'}} className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
							</div>
						</div>
						<div className="col-md-3 mb-3">
							<div className="p-3 card-beranda d-flex justify-content-around align-items-center rounded">
							<div className="card-body py-5">
								<h3 className="fs-2">720</h3>
								<p className="fs-5 ">Pengguna</p>
							</div>
							<i style={{color: '#73a700'}} className="fas fa-user fs-1 primary-text border rounded-full secondary-bg p-3"></i>
							</div>
						</div>
						<div className="col-md-3 mb-3">
							<div className="p-3 card-beranda d-flex justify-content-around align-items-center rounded">
							<div className="card-body py-5">
								<h3 className="fs-2">100</h3>
								<p className="fs-5 ">Lainnya</p>
							</div>
							<i style={{color: '#73a700'}} className="fas fa-search fs-1 primary-text border rounded-full secondary-bg p-3"></i>
							</div>
						</div>
					</div>

					<div className="row mt-3">
						<div className="col-md-12">
							<div className="card-table">
							<div className="card-header">
								<span><i className="bi bi-table me-2"></i></span> Tabel Data
							</div>
							<div className="card-body">
								<div className="table-responsive">
								<table className="table table-striped data-table">
									<thead>
									<tr>
										<th>Nama Barang</th>
										<th>Kondisi Barang</th>
										<th>Berat Barang</th>
										<th>Aksi</th>
										<th>Keterangan</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>Baju</td>
										<td>Masih Baik</td>
										<td>1 kg</td>
										<td></td>
										<td>Baju kaos lengan panjang</td>
									</tr>
									<tr>
										<td>Baju</td>
										<td>Masih Baik</td>
										<td>1 kg</td>
										<td></td>
										<td>Baju kaos lengan panjang</td>
									</tr>
									<tr>
										<td>Baju</td>
										<td>Masih Baik</td>
										<td>1 kg</td>
										<td></td>
										<td>Baju kaos lengan panjang</td>
									</tr>
									<tr>
										<td>Baju</td>
										<td>Masih Baik</td>
										<td>1 kg</td>
										<td></td>
										<td>Baju kaos lengan panjang</td>
									</tr>
									<tr>
										<td>Baju</td>
										<td>Masih Baik</td>
										<td>1 kg</td>
										<td></td>
										<td>Baju kaos lengan panjang</td>
									</tr>
									<tr>
										<td>Baju</td>
										<td>Masih Baik</td>
										<td>1 kg</td>
										<td></td>
										<td>Baju kaos lengan panjang</td>
									</tr>
									</tbody>
								</table>
								</div>
							</div>
							</div>
						</div>
					</div>

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