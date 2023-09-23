import clsx from "clsx";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const BodyCard: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx("rounded-lg shadow-lg bg-white p-4", className)}>
      {children}
    </div>
  );
};

export default BodyCard;
