interface Props {
  topLabel?: string;
  value: string;
  changeValue: (value: string) => void;
  placeholder?: string;
}

const InputDate = ({
  changeValue,
  topLabel,
  value,
  placeholder = "",
}: Props) => {
  return (
    <label className="form-contro">
      {topLabel && (
        <div className="label pl-0">
          <span className="label-text font-roboto font-medium text-gray-600">
            {topLabel}
          </span>
        </div>
      )}
      <input
        type="date"
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        className="p-2 border rounded-md bg-white border-gray-light"
      />
    </label>
  );
};

export default InputDate;
