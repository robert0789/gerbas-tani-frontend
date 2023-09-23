import clsx from "clsx";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const BodyCard: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx("rounded-lg shadow-xl bg-white p-4 text-gray-900", className)}>
      {children}
    </div>
  );
};

export default BodyCard;
