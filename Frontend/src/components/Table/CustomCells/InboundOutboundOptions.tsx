import { FiTrash2 } from "react-icons/fi";
import CellWrapper from "./CellWrapper";
import { ICellRendererParams } from "ag-grid-community";
import { Iloadunload } from "../../../utils/types/access";

const InboundOutboundOptions = ({
  setShowDeleteModal,
  params,
  setTargetDetail,
}: {
  params: ICellRendererParams;
  setTargetDetail: React.Dispatch<React.SetStateAction<Iloadunload>>;

  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const iconClasses = "text-2xl cursor-pointer";
  const openModal = () => {
    setTargetDetail(params.data as Iloadunload);
    setShowDeleteModal(true);
  };
  return (
    <CellWrapper className="gap-4">
      {/* <FiEdit className={`${iconClasses} text-orange-dark`} /> */}
      <FiTrash2
        className={`${iconClasses} text-red-dark`}
        onClick={openModal}
      />
    </CellWrapper>
  );
};

export default InboundOutboundOptions;
