import { HTMLAttributes } from "react";

export type Icons = "truck" | "package" | "access";

const ICON_IMAGES: Record<Icons, string> = {
  access: "/assets/images/access.png",
  package: "/assets/images/package.png",
  truck: "/assets/images/truck.png",
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: Icons;
}

const Icon = ({ icon, ...props }: Props) => {
  return (
    <div {...props}>
      <img className="w-full aspect-square" src={ICON_IMAGES[icon]} />
    </div>
  );
};

export default Icon;
