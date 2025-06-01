import { FiPlus } from "react-icons/fi";
import Button from "../../components/Button";
import TableController from "../../components/TableControllers";
import { useState } from "react";
import AccessTable from "../../components/Table/AccessTable";
import TableToggle, { Tables } from "../../components/TableToggle";
import ScheduleAccessTable from "../../components/Table/ScheduleAccessTable";
import AddScheduledAccessModal from "../../components/Modal/ModalCollection/AddScheduledAccessModal";

const AccessPage = () => {
  const [tableToRender, setTableToRender] = useState<Tables>("logs");
  const [showAddAccess, setShowAddAccess] = useState(false);

  const TABLE_VISUALIZATIONS: Record<Tables, JSX.Element> = {
    logs: <AccessTable />,
    scheduled_access: <ScheduleAccessTable />,
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between w-full py-10 px-4 max-w-7xl">
        <h1 className="text-3xl font-bold text-black-default">Acesso</h1>
        <Button
          color="blue"
          icon={FiPlus}
          iconPosition="Left"
          title="Adicionar Acesso"
          className="text-xs"
          onClick={() => setShowAddAccess(true)}
        />
      </div>
      <div className="pl-4">
        <TableToggle
          currentValue={tableToRender}
          clickFunction={setTableToRender}
        />
      </div>
      <TableController />
      {TABLE_VISUALIZATIONS[tableToRender]}
      {showAddAccess && (
        <AddScheduledAccessModal handleOpenState={setShowAddAccess} />
      )}
    </div>
  );
};

export default AccessPage;
