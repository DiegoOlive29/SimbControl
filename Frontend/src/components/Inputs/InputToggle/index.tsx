const InputToggle = ({
  label,
  isActive,
  buttonFunction = () => "",
}: {
  label?: string;
  isActive: boolean;
  buttonFunction?: () => void;
}): JSX.Element => {
  return (
    <div className="flex items-center gap-2">
      <div
        onClick={buttonFunction}
        className={`${
          isActive ? "bg-blue-medium pl-[5px]" : "bg-gray-600 pr-[5px]"
        }  w-[40px] h-[22px] rounded-2xl flex items-center p-[2px] cursor-pointer`}
      >
        <div
          className={`${
            isActive ? "translate-x-full" : "translate-x-0"
          } bg-white transition-all ease-in-out duration-200 w-[18px] h-[18px] rounded-full shadow-base`}
        />
      </div>
      {label && (
        <p className={`font-medium text-sm text-gray-dark`}>{label}:</p>
      )}
    </div>
  );
};

export default InputToggle;
