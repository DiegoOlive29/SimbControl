import { FiRefreshCw } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { ButtonHTMLAttributes } from "react";

const COLOR_SCHEMA = {
  blue: "bg-blue-dark text-white hover:bg-blue-deep",
  red: "bg-red-medium text-white hover:bg-red-dark",
  white: "bg-white border border-gray-light text-gray-dark hover:bg-gray-light",
  gray: "bg-neutral-dark text-gray-dark hover:bg-gray-light",
};

const ICON_POSITION = {
  Right: "flex flex-row-reverse",
  Left: "flex",
};

const TEXT_VIEW_PORT = {
  all: "",
  xs: "hidden xxs:block",
  sm: "hidden sm:block",
  md: "hidden md:block",
  lg: "hidden lg:block",
  xl: "hidden xl:block",
  never: "hidden",
};

interface ICommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: keyof typeof COLOR_SCHEMA;
  disabled?: boolean;
  title?: string;
  hoverTitle?: string;
  icon?: IconType;
  iconPosition?: keyof typeof ICON_POSITION;
  textViewPort?: keyof typeof TEXT_VIEW_PORT;
  isLoading?: boolean;
}

const Button = ({
  title,
  disabled = false,
  hoverTitle,
  color,
  icon: Icon,
  iconPosition = "Right",
  textViewPort = "all",
  isLoading,
  className,
  type,
  onClick,
}: ICommonButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${COLOR_SCHEMA[color]} 
            ${ICON_POSITION[iconPosition]}
            ${className}
            py-3 px-6 rounded-lg font-bold transition-all duration-200 ease-in-out flex gap-2 items-center disabled:opacity-80`}
      disabled={disabled || isLoading}
      type={type}
      title={hoverTitle}
    >
      {Icon && !isLoading && <Icon className={`stroke-[2] text-base`} />}
      {isLoading && <FiRefreshCw className={`animate-spin stroke-[2]`} />}
      {title && <p className={`${TEXT_VIEW_PORT[textViewPort]}`}>{title}</p>}
    </button>
  );
};

export default Button;
