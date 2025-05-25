import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  topLabel: string;
  value: string;
  changeValue: (value: string) => void;
  bottomLabel?: string;
  showBottomLabel?: boolean;
  placeholder?: string;
  styleType?: "default" | "variant";
}

const InputNumber = ({
  bottomLabel,
  changeValue,
  showBottomLabel,
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
              ? "font-roboto text-gray-600"
              : "font-jura text-black-default"
          } font-medium`}
        >
          {topLabel}
        </span>
      </div>
      <input
        type="number"
        value={value}
        onChange={(event) => changeValue(event.target.value)}
        placeholder={placeholder}
        className={`p-2 border rounded-md border-gray-light w-full bg-white text-black-default ${className}`}
      />
      <div className="label">
        <span className="label-text-alt text-red-400 h-4">
          {showBottomLabel && bottomLabel}
        </span>
      </div>
    </label>
  );
};

export default InputNumber;
