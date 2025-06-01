import { FiPlus } from "react-icons/fi";
import Button from "../../components/Button";
import TableController from "../../components/TableControllers";
import { useState } from "react";
import ReceivingTable from "../../components/Table/ReceivingTable";
import AddReceivingModal from "../../components/Modal/ModalCollection/AddReceivingModal";

const ReceivingPage = () => {
  const [showAddReceiving, setShowAddReceiving] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between w-full py-10 px-4 max-w-7xl">
        <h1 className="text-3xl font-bold text-black-default">Recebimento</h1>
        <Button
          color="blue"
          icon={FiPlus}
          iconPosition="Left"
          title="Adicionar Recebimento"
          className="text-xs"
          onClick={() => setShowAddReceiving(true)}
        />
      </div>
      <TableController />
      <ReceivingTable />
      {showAddReceiving && (
        <AddReceivingModal handleOpenState={setShowAddReceiving} />
      )}
    </div>
  );
};

export default ReceivingPage;
