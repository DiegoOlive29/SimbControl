import { FiAlertCircle, FiDownload, FiEdit, FiTrash2 } from "react-icons/fi";
import CellWrapper from "./CellWrapper";
import { ICellRendererParams } from "ag-grid-community";
import { ReceivingItem } from "../ReceivingTable";

const ReceivingOptions = ({
  params,
  setShowDetailModal,
  setTargetDetail,
  setShowDeleteModal,
}: {
  params: ICellRendererParams;
  setTargetDetail: React.Dispatch<React.SetStateAction<ReceivingItem>>;
  setShowDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { status } = params.data;
  const iconClasses = "text-2xl cursor-pointer";

  const openModal = () => {
    setTargetDetail(params.data as ReceivingItem);
    setShowDetailModal(true);
  };

  return (
    <CellWrapper className="gap-4">
      {status === "Retirado" && (
        <FiAlertCircle
          className={`${iconClasses} text-green-dark`}
          onClick={openModal}
        />
      )}
      {status === "Recebido" && (
        <FiEdit
          className={`${iconClasses} text-orange-dark`}
          onClick={openModal}
        />
      )}
      <FiTrash2
        className={`${iconClasses} text-red-dark`}
        onClick={() => setShowDeleteModal(true)}
      />
      <FiDownload className={`${iconClasses} text-blue-bright`} />
    </CellWrapper>
  );
};

export default ReceivingOptions;
