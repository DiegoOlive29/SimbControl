import React from "react";
import MenuCard from "../../components/MenuCard";
import { menus, MenusMap } from "./scheme";
import LogOutButton from "../../components/LogOutButton";

const MenuPage = () => {
  const keys = Object.keys(MenusMap) as menus[];

  return (
    <>
      <div className="ml-40 p-4 min-h-52">
        <LogOutButton />
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-[1440px] w-full p-5 xl:px-[66px] flex flex-col flex-grow items-center justify-center min-h-screen">
          <ul className="flex flex-wrap gap-10 justify-center">
            {React.Children.toArray(
              keys.map((key) => {
                const menuData = MenusMap[key];
                return (
                  <MenuCard
                    icon={menuData.icon}
                    label={menuData.title}
                    path={menuData.path}
                  />
                );
              })
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
