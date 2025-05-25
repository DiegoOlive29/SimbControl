import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CellWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={`h-full flex items-center justify-start w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default CellWrapper;
