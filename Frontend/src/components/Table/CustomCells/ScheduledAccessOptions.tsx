import { FiAlertCircle } from "react-icons/fi";
import CellWrapper from "./CellWrapper";
import { ScheduleAccessItem } from "../ScheduleAccessTable ";
import { ICellRendererParams } from "ag-grid-community";

const ScheduledAccessOptions = ({
  params,
  setShowDetailModal,
  setTargetDetail,
}: {
  params: ICellRendererParams;
  setTargetDetail: React.Dispatch<React.SetStateAction<ScheduleAccessItem>>;
  setShowDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const openModal = () => {
    setTargetDetail(params.data as ScheduleAccessItem);
    setShowDetailModal(true);
  };

  const iconClasses = "text-2xl cursor-pointer";
  return (
    <CellWrapper className="gap-4">
      <FiAlertCircle
        className={`${iconClasses} text-green-dark`}
        onClick={openModal}
      />
    </CellWrapper>
  );
};

export default ScheduledAccessOptions;
