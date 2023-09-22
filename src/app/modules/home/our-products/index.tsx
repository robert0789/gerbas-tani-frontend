const OurProducts: React.FC = () => {
  return (
    <div className="py-24">
      <div className="grid grid-col-1 sm:grid-cols-3 gap-x-8">
        <div className="flex flex-col gap-y-4 p-8 bg-gray-200 text-gray-900 justify-center items-center">
          <div className="bg-white w-[200px] aspect-[2/3]"></div>
          <div>
            <h3 className="text-3xl font-bold">Sayuran Semi Organik</h3>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 p-8 bg-gray-200 text-gray-900 justify-center items-center">
          <div className="bg-white w-[200px] aspect-[2/3]"></div>
          <div>
            <h3 className="text-3xl font-bold">Sayuran Semi Organik</h3>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 p-8 bg-gray-200 text-gray-900 justify-center items-center">
          <div className="bg-white w-[200px] aspect-[2/3]"></div>
          <div>
            <h3 className="text-3xl font-bold">Sayuran Semi Organik</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
