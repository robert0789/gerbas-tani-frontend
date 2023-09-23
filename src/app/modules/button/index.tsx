import clsx from "clsx";

type Props = {
  variant: "primary" | "seconday" | "text";
} & React.HTMLAttributes<HTMLDivElement>;

const Button: React.FC<Props> = ({ variant, children, className }) => {
  return (
    <button
      type="submit"
      className={clsx(className, "transition-all", {
        "flex w-full items-center justify-center border-2 hover:bg-green-700 border-green-700 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2":
          variant === "primary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
