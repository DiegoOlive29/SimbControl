import { ICellRendererParams } from "ag-grid-community";
import CellWrapper from "./CellWrapper";
import AddEntry from "../../AddEntry";
import { Iloadunload } from "../../../utils/types/access";

const AddLeavingTime = ({
  setShowModal,
  params,
  setTargetDetail,
}: {
  params: ICellRendererParams;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTargetDetail: React.Dispatch<React.SetStateAction<Iloadunload>>;
}) => {
  const openModal = () => {
    setTargetDetail(params.data as Iloadunload);
    setShowModal(true);
  };
  const { horariosaida } = params.data;
  return (
    <CellWrapper>
      {horariosaida != "" ? (
        <p>{horariosaida}</p>
      ) : (
        <AddEntry action={openModal} label="Saída" />
      )}
    </CellWrapper>
  );
};

export default AddLeavingTime;
