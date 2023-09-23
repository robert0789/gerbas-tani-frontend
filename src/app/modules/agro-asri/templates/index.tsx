import Image from "next/image";
import HeroBanner from "../../hero-banner";
import CTA from "../../cta";

const AgroAsriTemplate: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <div className="bg-gray-900 w-full">
        <div className="relative isolate overflow-hidden sm:pt-14">
          <div className="relative h-96 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-full bg-white order-1 lg:order-2 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="vegetables"
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
              className="w-full"
              priority
            />
          </div>
          <div
            className="absolute inset-x-0 w-1/2 h-full top-0 -z-10 transform-gpu bg-gray-900 opacity-50 blur-3xl"
            aria-hidden="true"
          ></div>
          <div className="absolute sm:static top-0 left-0 w-full h-full mx-auto max-w-7xl py-32 sm:py-44 z-10">
            <div className="text-left sm:px-6 px-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl flex flex-col gap-y-4">
                <span>Agro Asri </span>
                <span className="py-2 px-8 bg-yellow-400 rounded-lg w-fit text-green-700">
                  Farm
                </span>
              </h1>
            </div>
            <div className="absolute top-0 -left-12 -z-10">
              <svg
                width="501"
                height="732"
                viewBox="0 0 501 732"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.6561 -273.211C1.47787 -250.158 -45.6293 -263.606 -64.2856 -273.211V1011.16H100.123L142.1 953.527C179.412 913.733 266.631 828.383 317.003 805.33C379.968 776.514 306.509 735.349 390.462 673.6C457.625 624.201 467.419 545.986 463.921 513.054L495.404 455.422C516.392 373.09 456.925 410.139 488.408 319.575C519.89 229.01 481.412 187.845 463.921 154.912C446.431 121.98 498.902 60.231 446.431 23.1819C393.96 -13.8672 397.458 -22.1004 376.47 -71.4992C355.481 -120.898 327.497 -125.015 285.52 -137.364C243.544 -149.714 257.536 -190.88 222.555 -219.696C187.575 -248.512 142.1 -186.763 117.613 -244.395C98.0243 -290.501 58.1464 -282.816 40.6561 -273.211Z"
                  fill="#52BA49"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-y-16 py-24 px-6">
        <h2 className="text-4xl font-bold">Kenapa Harus Agro Asri Farm?</h2>
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-row gap-x-12">
            <div className="relative w-full h-auto aspect-[3/2] mx-auto">
              <Image
                src={
                  "https://images.unsplash.com/photo-1518278364075-eb43498f2a73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2141&q=80"
                }
                alt="Gerbas"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
                className="w-full"
                priority
              />
            </div>
            <div className="relative w-full h-auto aspect-[3/2] mx-auto">
              <Image
                src={
                  "https://images.unsplash.com/photo-1518278364075-eb43498f2a73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2141&q=80"
                }
                alt="Gerbas"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
                className="w-full"
                priority
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-12">
            <div className="relative w-full h-auto aspect-[3/1] mx-auto">
              <Image
                src={
                  "https://images.unsplash.com/photo-1518278364075-eb43498f2a73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2141&q=80"
                }
                alt="Gerbas"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
                className="w-full"
                priority
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-12">
            <div className="relative w-full h-auto aspect-[3/2] mx-auto">
              <Image
                src={
                  "https://images.unsplash.com/photo-1518278364075-eb43498f2a73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2141&q=80"
                }
                alt="Gerbas"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
                className="w-full"
                priority
              />
            </div>
            <div className="relative w-full h-auto aspect-[3/2] mx-auto">
              <Image
                src={
                  "https://images.unsplash.com/photo-1518278364075-eb43498f2a73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2141&q=80"
                }
                alt="Gerbas"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
                className="w-full"
                priority
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-12">
            <div className="relative w-full h-auto aspect-[3/1] mx-auto">
              <Image
                src={
                  "https://images.unsplash.com/photo-1518278364075-eb43498f2a73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2141&q=80"
                }
                alt="Gerbas"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">Cara Scan</h2>
            <p className="py-6">Lorem Ipsum dolor sit amet</p>
          </div>
          <div>
            <div className="relative w-full aspect-[2/3] h-auto">
              <Image
                src={
                  "https://drive.google.com/uc?id=1wt6SSE12eDFNm4Vjd9815N70LKtACPzm"
                }
                alt="Gerbas"
                layout="fill"
                objectFit="contain"
                objectPosition={"center"}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <CTA
        title="Yuk ke Agro Asri Farm"
        description="Cari tahu pengolahan khusus untuk sayuran semi organik demi mengurangi bahan kimia sekarang!"
        button={{ link: "", text: "Cek Lokasi" }}
      />
    </div>
  );
};

export default AgroAsriTemplate;
