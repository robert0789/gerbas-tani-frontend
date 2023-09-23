import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import BodyCard from "../../card";

const produk = [
  {
    nama: "Jagung",
    nama_petani: "Nama Petani",
    asal_desa: "Asal Desa",
    status: "ada",
  },
  {
    nama: "Wortel",
    nama_petani: "Nama Petani",
    asal_desa: "Asal Desa",
    status: "ada",
  },
  {
    nama: "Kol",
    nama_petani: "Nama Petani",
    asal_desa: "Asal Desa",
    status: "ada",
  },
  {
    nama: "Kol Putih",
    nama_petani: "Nama Petani",
    asal_desa: "Asal Desa",
    status: "ada",
  },
];

const ProdukTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        <BodyCard className="!bg-green-900 text-white p-8 flex flex-row justify-between">
          <div>
            Kalian Juga bisa membeli Secara langsung pada GERBAS TANI.
            <div>Datanglah Pada Agustus nanti!</div>
          </div>
          <MapPinIcon className="w-10 h-10" />
        </BodyCard>
        <BodyCard className="p-8">
          <h1 className="text-4xl font-bold">
            Dari Petani, Demi Petani, Untuk Petani
          </h1>
          <p>Di gerbas tani banyak sayuran yang akan kami jual loh</p>
          <div className="flex flex-row w-fit justify-start items-center rounded-lg border mt-4 mb-8">
            <div className="p-2">
              <input
                type="text"
                className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Cari Produk"
              />
            </div>
            <div className="bg-green-900 text-white p-4 rounded-r-lg">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </div>
          </div>
          <h2 className="text-3xl font-bold">Terlaku Di Gerbas:</h2>
          <div className="divide-y divide-gray-200 rounded-lg">
            {produk.map((item, index) => (
              <div
                className="flex flex-row gap-x-4 justify-evenly py-4 items-center"
                key={index}
              >
                <div className="flex flex-row gap-x-2 w-4/12">
                  <div className="w-5 h-5 border border-green-900 rounded-full">
                    J
                  </div>
                  <span>{item.nama}</span>
                </div>
                <div className="w-2/12">{item.nama_petani}</div>
                <div className="w-2/12">{item.asal_desa}</div>
                <div className="w-2/12">
                  <div className="w-fit rounded-md bg-green-900 text-white text-sm px-4 py-2">
                    {item.status}
                  </div>
                </div>
                <div className="w-2/12">
                  <a href="wa.me/a" className="px-6 py-4 shadow-md rounded-md">
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            ))}
          </div>
        </BodyCard>
      </div>
    </div>
  );
};

export default ProdukTemplate;
