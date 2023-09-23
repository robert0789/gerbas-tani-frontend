import Image from "next/image";
import HeroBanner from "../../hero-banner";
import CTA from "../../cta";

const EsLabuTemplate: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <HeroBanner
        title="Labu Madu Jadi Ice Cream?"
        background={{
          alt: "Format",
          url: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-row items-center">
          <div className="w-full">
            <div className="flex flex-col mx-auto">
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Labu Madu Jadi Ice Cream?
              </p>
              <p className="mt-4 text-xl text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                nec mi neque. Nulla ac ipsum dui. Nullam sit amet ex rhoncus mi
                ullamcorper cursus ac at nulla. Morbi ullamcorper laoreet
                mauris, id pulvinar neque tincidunt finibus. Ut eget massa
                dignissim, tempor augue in, fringilla lorem. Duis convallis
                consectetur justo sit amet placerat. Morbi ut luctus nisl. Fusce
                ultrices enim ac dictum aliquet. Duis non mollis neque.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="relative w-8/12 h-auto aspect-square">
              <Image
                src="https://drive.google.com/uc?id=1otDHukW2MM8O8AryAa4URQGJjnjHe-FA"
                alt="Labu Madu"
                layout="fill"
                objectFit="contain"
                objectPosition={"center"}
                className="w-full z-10"
                priority
              />
              <div className="absolute bottom-0 right-0 rounded-full w-[300px] h-[300px] bg-yellow-300"></div>
            </div>
          </div>
        </div>
      </div>
      <CTA
        title="Yuk ke Agro Asri Farm"
        description="Cari tahu pengolahan khusus untuk sayuran semi organik demi mengurangi bahan kimia sekarang!"
        button={{ link: "", text: "" }}
      />
    </div>
  );
};

export default EsLabuTemplate;
