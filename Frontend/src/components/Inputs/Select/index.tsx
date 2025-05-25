interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  defaultText: string;
}

const Select = ({
  value,
  onChange,
  options,
  defaultText,
  label,
}: SelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="label pl-0">
        <span className="label-text font-roboto text-gray-600 whitespace-nowrap">
          {label}
        </span>
      </div>
      <select
        className="p-2 border rounded-md bg-white border-gray-light text-gray-dark"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{defaultText}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
