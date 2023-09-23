import clsx from "clsx";
import Button from "../button";
import { MapPinIcon } from "@heroicons/react/24/outline";

type Props = {
  title?: string;
  description?: string;
  button: {
    link: string;
    text: string;
  };
} & React.HTMLAttributes<HTMLDivElement>;

const CTA: React.FC<Props> = ({ title, description, button, className }) => {
  return (
    <div className={clsx("w-full bg-green-700 py-24", className)}>
      <div className="flex flex-col sm:flex-row gap-8 text-white px-4 sm:px-0 max-w-7xl mx-auto items-center">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl">{description}</p>
        </div>
        <div className="w-full flex justify-center">
          <Button variant="secondary" className="!py-8 !px-16 !text-4xl">
            <MapPinIcon className="h-10 w-10" />&nbsp;
            Cek Lokasi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
