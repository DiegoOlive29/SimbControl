import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  topLabel: string;
  value: string;
  changeValue: (value: string) => void;
  placeholder?: string;
  styleType?: "default" | "variant";
}

const InputText = ({
  changeValue,
  topLabel,
  value,
  placeholder = "",
  className,
  styleType = "default",
}: Props) => {
  return (
    <label className="form-control w-full">
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
        type="text"
        value={value}
        onChange={(event) => changeValue(event.target.value)}
        placeholder={placeholder}
        className={`p-2 border rounded-md border-gray-light w-full bg-white text-black-default ${className}`}
      />
    </label>
  );
};

export default InputText;
