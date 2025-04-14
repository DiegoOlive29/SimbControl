import { useNavigate } from "react-router";
import Icon, { Icons } from "../Icon";

interface Props {
  icon: Icons;
  label: string;
  path: string;
}

const MenuCard = ({ icon, label, path }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(path)}
      className="bg-white px-20 py-7 flex flex-col gap-10 rounded-xl cursor-pointer"
    >
      <Icon icon={icon} className="w-full flex-grow" />
      <p className="font-roboto text-2xl font-bold text-center text-black-default">
        {label}
      </p>
    </div>
  );
};

export default MenuCard;
