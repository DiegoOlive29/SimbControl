interface Props {
  topLabel: string;
  value: string;
  changeValue: (value: string) => void;
  bottomLabel?: string;
  showBottomLabel?: boolean;
  placeholder?: string;
}

const InputTime = ({
  changeValue,
  topLabel,
  value,
  placeholder = "",
}: Props) => {
  return (
    <label className="form-contro">
      <div className="label pl-0">
        <span className="label-text font-roboto text-gray-600 whitespace-nowrap font-medium">
          {topLabel}
        </span>
      </div>
      <input
        type="time"
        value={value}
        onChange={(event) => changeValue(event.target.value)}
        placeholder={placeholder}
        className="p-2 border rounded-md bg-white border-gray-light"
      />
    </label>
  );
};

export default InputTime;
