import Image from "next/image";
import HeroBanner from "../../hero-banner";
import CTA from "../../cta";

const bahayaKimia = [
  {
    title: "Memicu Gangguan Kesehatan",
    image: {
      url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "asd",
    },
  },
  {
    title: "Memicu Gangguan Kesehatan",
    image: {
      url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "asd",
    },
  },
  {
    title: "Memicu Gangguan Kesehatan",
    image: {
      url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "asd",
    },
  },
];

const pupuk = [
  {
    title: "Bio Urin",
    description:
      "Bio-urine merupakan urine yang diambil dari ternak ruminansia seperti sapi, kerbau, kambing dan lainnya yang dilakukan fermentasi untuk digunakan sebagai pupuk tanaman yang ramah lingkungan.",
    image: {
      url: "https://drive.google.com/uc?id=1H_SV-PN9ko0cZ8LPgffpVAaFsNCznQi1",
      alt: "Produk Bio Urine",
    },
  },
  {
    title: "Bio Saka",
    description:
      "Biosaka dibuat dari bahan rerumputan dan daun tanaman berpohon yang sedang dalam pertumbuhan optimal dengan ciri-ciri yaitu daun dalam keadaan sehat, tidak terserang hama, jamur, virus.",
    image: {
      url: "https://drive.google.com/uc?id=1aQYLCNbGpr_XOiDvT_E9cs6itP0VX2Z3",
      alt: "Produk Bio Urine",
    },
  },
];

const PupukTemplate: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <HeroBanner
        title="Penanaman dengan Kebiasaan Baru"
        background={{
          url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Pupuk Banner",
        }}
        className="rounded-b-3xl"
      />
      <div className="max-w-7xl mx-auto py-24">
        <h2 className="text-3xl font-bold">Bahaya Pupuk Kimia</h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-6">
          {bahayaKimia.map((item, index) => (
            <div key={index}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={"center"}
                    className="w-full"
                    priority
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-xl font-bold text-gray-900 text-center">
                    {item.title}
                  </h3>
                </div>
                {/* <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-center overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">{item.title}</p>
                </div>` */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-24">
        <h2 className="text-5xl font-bold mb-24 text-center">Memperkenalkan</h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-12">
          {pupuk.map((item, index) => (
            <div key={index}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg -mt-16 -mb-40 z-10 rotate-12">
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
                    layout="fill"
                    objectFit="contain"
                    objectPosition={"center"}
                    className="w-full -m-4"
                    priority
                  />
                </div>
                <div className="relative bg-yellow-300 text-green-900 -mt-12 px-12 pt-32 pb-12 rounded-lg">
                  <h2 className="text-3xl font-bold text-center mb-2">
                    {item.title}
                  </h2>
                  <div>
                    <p>{item.description}</p>
                  </div>
                </div>
                {/* <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-center overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">{item.title}</p>
                </div>` */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTA
        title="Tertarik Pupuk Organik?"
        description="Yuk ke Gerbas Tani dan Taman Agro Asri Farm dan beli produk yang sudah ada!"
        button={{ link: "", text: "" }}
      />
    </div>
  );
};

export default PupukTemplate;
