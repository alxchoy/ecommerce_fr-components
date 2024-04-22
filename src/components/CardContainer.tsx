interface CardContainerProps {
  children: React.ReactElement;
  className?: string;
}

const CardContainer = ({ children, className }: CardContainerProps) => {
  return (
    <div
      className={`rounded-md bg-white p-4 shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] ${className}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
