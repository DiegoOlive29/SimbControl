import { FiPlus } from "react-icons/fi";
import Button from "../../components/Button";
import InboundOutboundTable from "../../components/Table/InboundOutboundTable";
import TableController from "../../components/TableControllers";
import { useState } from "react";
import AddVehicleModal from "../../components/Modal/ModalCollection/AddVehicleModal";

const InboundOutboundPage = () => {
  const [showAddVehicle, setShowAddVehicle] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between w-full py-10 px-4 max-w-7xl">
        <h1 className="text-3xl font-bold text-black-default">
          Carga/Descarga
        </h1>
        <Button
          color="blue"
          icon={FiPlus}
          iconPosition="Left"
          title="Adicionar Veículo"
          className="text-xs"
          onClick={() => setShowAddVehicle(true)}
        />
      </div>
      <TableController />
      <InboundOutboundTable />
      {showAddVehicle && (
        <AddVehicleModal handleOpenState={setShowAddVehicle} />
      )}
    </div>
  );
};

export default InboundOutboundPage;
