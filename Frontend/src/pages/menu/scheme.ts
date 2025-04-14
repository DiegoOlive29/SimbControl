import { Icons } from "../../components/Icon";

export type menus = "load" | "receiving" | "access";

interface MenuItem {
  path: string;
  title: string;
  icon: Icons;
}

export const MenusMap: Record<menus, MenuItem> = {
  load: {
    icon: "truck",
    path: "/carga-descarga",
    title: "Carga / Descarga",
  },
  receiving: {
    icon: "package",
    path: "/recebimento",
    title: "Recebimento",
  },
  access: {
    icon: "access",
    path: "/acessos",
    title: "Acessos",
  },
};
