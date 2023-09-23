import Image from "next/image";
import HeroBanner from "../../hero-banner";

const GerbasTaniTemplate: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <HeroBanner
        title="Mahakarya Yang Membumi"
        description="Dari Petani, Untuk Petani, Demi Petani"
        background={{
          alt: "vegetables",
          url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        }}
      />
      <div className="max-w-7xl mx-auto py-24 px-6">
        <h2 className="text-5xl font-bold text-center">Pilar Gerbas Tani</h2>
        <div className="relative w-full h-auto aspect-[3/2] max-w-3xl mx-auto my-8">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-200 rounded-md w-full flex flex-row">
            <div className="flex justify-center items-center p-2 px-4">
              <div className="bg-white rounded-full aspect-square w-[50px]"></div>
            </div>
            <div className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="bg-gray-200 rounded-md w-full flex flex-row">
            <div className="flex justify-center items-center p-2 px-4">
              <div className="bg-white rounded-full aspect-square w-[50px]"></div>
            </div>
            <div className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="bg-gray-200 rounded-md w-full flex flex-row">
            <div className="flex justify-center items-center p-2 px-4">
              <div className="bg-white rounded-full aspect-square w-[50px]"></div>
            </div>
            <div className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="bg-gray-200 rounded-md w-full flex flex-row">
            <div className="flex justify-center items-center p-2 px-4">
              <div className="bg-white rounded-full aspect-square w-[50px]"></div>
            </div>
            <div className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-24">
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
      </div>
    </div>
  );
};

export default GerbasTaniTemplate;
