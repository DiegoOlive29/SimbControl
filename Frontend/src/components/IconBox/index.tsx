import { IconType } from "react-icons";

interface Props {
  icon: IconType;
}

const IconBox = ({ icon }: Props) => {
  const Icon = icon;

  return (
    <div className="border border-gray-pale rounded-lg p-3">
      <Icon className="text-2xl text-gray-dark" />
    </div>
  );
};

export default IconBox;
