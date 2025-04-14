import { Outlet } from "react-router";
import { menus, MenusMap } from "../menu/scheme";
import React from "react";
import { NavLink } from "react-router";
import Icon from "../../components/Icon";
import LogOutButton from "../../components/LogOutButton";
import Toast from "../../components/Toast";
import { useAlert } from "../../common/context/AlertContext";

const PageWrapper = () => {
  const keys = Object.keys(MenusMap) as menus[];
  const { showAlertModal } = useAlert();

  return (
    <div className="h-screen flex">
      <div className="absolute w-full top-4 left-4">
        <LogOutButton />
      </div>
      <div className="h-screen w-40 flex flex-col mt-32 gap-6 bg-blue-deep relative">
        {React.Children.toArray(
          keys.map((key) => {
            const menu = MenusMap[key];
            return (
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `${
                    isActive && "bg-white"
                  } ml-2 flex items-center justify-center py-3 rounded-l-xl`
                }
              >
                <Icon icon={menu.icon} className="max-w-[100px]" />
              </NavLink>
            );
          })
        )}
      </div>
      <div className="mt-32 bg-white w-full h-[90%]">
        <Outlet />
      </div>
      {showAlertModal && <Toast />}
    </div>
  );
};

export default PageWrapper;
