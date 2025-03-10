import { InputHTMLAttributes, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  topLabel: string;
  value: string;
  changeValue: (value: string) => void;
  placeholder?: string;
  styleType?: "default" | "variant";
}

const InputPassword = ({
  changeValue,
  topLabel,
  value,
  placeholder = "",
  className,
  styleType = "default",
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label className="form-control w-full relative">
      <div className="label pl-0">
        <span
          className={`label-text ${
            styleType === "default"
              ? "font-roboto text-gray-dark"
              : "font-jura text-black-default"
          } font-medium`}
        >
          {topLabel}
        </span>
      </div>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(event) => changeValue(event.target.value)}
        placeholder={placeholder}
        className={`p-2 border rounded-md border-gray-light w-full bg-white text-black-default ${className} pr-2`}
      />
      <div
        className="absolute bottom-3 right-2 text-white"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword && <FiEyeOff />}
        {!showPassword && <FiEye />}
      </div>
    </label>
  );
};

export default InputPassword;
