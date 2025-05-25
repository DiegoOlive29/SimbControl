import { FiPackage } from "react-icons/fi";
import ModalWrapper from "../ModalWrapper";
import Button from "../../Button";
import IconBox from "../../IconBox";
import { ReceivingItem } from "../../Table/ReceivingTable";
import { useState } from "react";
import CheckReceivingModal from "./CheckReceivingModal";

interface Props {
  handleOpenState: React.Dispatch<React.SetStateAction<boolean>>;
  item: ReceivingItem;
}

const ReceivingDetailsModal = ({ handleOpenState, item }: Props) => {
  const [showCheckModal, setShowCheckModal] = useState(false);

  return (
    <ModalWrapper
      modalTitle={<IconBox icon={FiPackage} />}
      handleOpenState={handleOpenState}
    >
      <div className="text-sm text-gray-700 space-y-2">
        <p>
          <strong>Remetente:</strong> {item.remetente}
        </p>
        <p>
          <strong>Destinatário:</strong> {item.destinatario}
        </p>
        <p>
          <strong>Volumes:</strong> {item.volumes} <strong>NF:</strong>{" "}
          {item.nf}
        </p>
        <p>
          <strong>Data:</strong> {item.data}{" "}
          <strong>Chegada na portaria:</strong> {item.horario_de_recebimento}
        </p>
        <p>
          <strong>Recebido por:</strong> {item.recebido_por}
        </p>
        <p>
          <strong>Descrição:</strong> {item.descricao}
        </p>
        <p>
          <strong>Recebimento com divergências:</strong> Sim
        </p>
      </div>

      {item.image && (
        <div className="my-4">
          <img
            src={item.image}
            alt="Divergência"
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      )}

      <div className="text-sm text-gray-700 mb-4">
        <p>
          <strong>Observação:</strong> {item.observation}
        </p>
      </div>

      {item.status === "Recebido" && (
        <div className="flex justify-between">
          <Button
            onClick={() => handleOpenState(false)}
            color="white"
            title="Cancelar"
          />
          <Button
            color="blue"
            onClick={() => setShowCheckModal(true)}
            title="Marcar como Retirado"
          />
        </div>
      )}
      {showCheckModal && (
        <div className="fixed top-0 left-0">
          <CheckReceivingModal
            handleOpenState={setShowCheckModal}
            checkFunction={() => ""}
          />
        </div>
      )}
    </ModalWrapper>
  );
};

export default ReceivingDetailsModal;
