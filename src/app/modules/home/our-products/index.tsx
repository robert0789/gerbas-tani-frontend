import Image from "next/image";

const OurProducts: React.FC = () => {
  return (
    <div className="py-24">
      <div className="grid grid-col-1 sm:grid-cols-3 gap-x-8">
        <div className="flex flex-col gap-y-4 p-8 bg-gray-200 text-gray-900 justify-center items-center">
          <div className="relative max-w-[200px] w-full aspect-[2/3]">
            <Image
              src={
                "https://purepng.com/public/uploads/large/purepng.com-green-lettucevegetablessalad-lettuce-spinach-leaves-leafs-green-lettuce-9415246830442i0w0.png"
              }
              alt="Gerbas"
              layout="fill"
              objectFit="contain"
              objectPosition={"center"}
              className="w-full"
              priority
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold">Sayuran Semi Organik</h3>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 p-8 bg-gray-200 text-gray-900 justify-center items-center">
          <div className="relative max-w-[200px] w-full aspect-[2/3]">
            <Image
              src={
                "https://purepng.com/public/uploads/large/ice-cream-in-glass-wrx.png"
              }
              alt="Gerbas"
              layout="fill"
              objectFit="contain"
              objectPosition={"center"}
              className="w-full"
              priority
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold">Es Krim Labu</h3>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 p-8 bg-gray-200 text-gray-900 justify-center items-center">
          <div className="relative max-w-[200px] w-full aspect-[2/3]">
            <Image
              src={
                "https://purepng.com/public/uploads/large/leaves-in-soil-1nb.png"
              }
              alt="Gerbas"
              layout="fill"
              objectFit="contain"
              objectPosition={"center"}
              className="w-full"
              priority
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold">Pupuk</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
