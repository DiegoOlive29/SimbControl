import { FiPlusCircle } from "react-icons/fi";

interface Props {
  label: string;
  action: () => void;
}

const AddEntry = ({ label, action }: Props) => {
  return (
    <button
      onClick={action}
      className="text-black-default flex items-center gap-2"
    >
      <FiPlusCircle className="text-2xl " />
      <p className="text-sm font-medium font-roboto">{label}</p>
    </button>
  );
};

export default AddEntry;
