import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../common/context/AuthContext";
import logo from "./Group 3.png";

const LogOutButton = (): JSX.Element => {
  const { signOut } = useAuth();

  return (
    <div className="flex container mt-5 flex-row w-10/12 justify-between pl-5">
      <div className="w-full justify-center">
        <img src={logo} alt="Minha logo" />
      </div>
      <div
        onClick={() => signOut()}
        className="flex items-center gap-2  text-xl cursor-pointer"
      >
        <FiLogOut />
        <p>Sair</p>
      </div>
    </div>
  );
};

export default LogOutButton;
