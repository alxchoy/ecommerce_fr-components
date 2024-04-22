interface ButtonProps {
  name: string;
  onClick(): void;
  isPrimary?: boolean;
  className?: string;
}

const Button = ({
  name,
  onClick,
  isPrimary = false,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-md px-5 py-2.5 font-medium uppercase ${isPrimary ? "bg-[#536DFE] text-white hover:bg-[#213BC5]" : "border border-[#536DFE] text-[#536DFE]"} ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
