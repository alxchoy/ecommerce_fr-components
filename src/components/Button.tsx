interface ButtonProps {
  name: string;
  onClick(): void;
  primary?: boolean;
  className?: string;
  size?: sizeButton;
}
type sizeButton = "small" | "large" | "medium";
type mapSizeButton = { [Property in sizeButton]: string };

const Button = ({
  name,
  onClick,
  primary = false,
  className,
  size = "large",
}: ButtonProps) => {
  const mapSizeStyles: mapSizeButton = {
    small: "p-2 text-xs",
    medium: "",
    large: "px-5 py-2.5",
  };

  return (
    <button
      className={`
        rounded-md
        font-medium
        uppercase
        ${mapSizeStyles[size]}
        ${primary ? "bg-[#536DFE] text-white hover:bg-[#213BC5]" : "border border-[#536DFE] text-[#536DFE]"}
        ${className}
      `}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
