type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={className}
      style={{ borderRadius: "8px", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

export default Card;
