import { HTMLAttributes, ReactNode } from "react";
import { FiX } from "react-icons/fi";

interface Props extends HTMLAttributes<HTMLDivElement> {
  modalTitle: string | ReactNode;
  children: ReactNode;
  handleOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWrapper = ({
  modalTitle,
  children,
  handleOpenState,
  className,
}: Props) => {
  return (
    <div className="flex absolute top-0 left-0 h-[100vh] w-[100vw] items-center justify-center ">
      <div
        className="fixed z-10 top-0 left-0 h-[100vh] w-[100vw] bg-[#00000060] flex items-center justify-center"
        onClick={() => handleOpenState(false)}
      ></div>

      <div
        className={`bg-white p-8 rounded-xl relative z-50 flex flex-col gap-8 ${className}`}
      >
        <div className="flex items-start justify-between gap-10">
          {modalTitle}
          <FiX
            className="hover:cursor-pointer text-2xl text-gray-medium"
            onClick={() => handleOpenState(false)}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
