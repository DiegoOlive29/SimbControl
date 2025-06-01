import { FiList, FiUser } from "react-icons/fi";
import Button from "../Button";

export type Tables = "logs" | "scheduled_access";

interface Props {
  currentValue: Tables;
  clickFunction: (value: Tables) => void;
}

const TableToggle = ({ clickFunction, currentValue }: Props): JSX.Element => {
  const options: { viewKey: Tables; icon: JSX.Element }[] = [
    {
      viewKey: "logs",
      icon: (
        <Button
          color={currentValue === "logs" ? "blue" : "gray"}
          title="Log de Acessos"
          icon={FiList}
          iconPosition="Left"
          className="text-xs py-2 px-3"
        />
      ),
    },
    {
      viewKey: "scheduled_access",
      icon: (
        <Button
          color={currentValue === "scheduled_access" ? "blue" : "gray"}
          title="Acessos Agendados"
          icon={FiUser}
          iconPosition="Left"
          className="text-xs py-2 px-3"
        />
      ),
    },
  ];

  return (
    <div className="flex items-center gap-10">
      {options.map((option) => (
        <div key={option.viewKey} onClick={() => clickFunction(option.viewKey)}>
          {option.icon}
        </div>
      ))}
    </div>
  );
};

export default TableToggle;
