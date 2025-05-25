import { ICellRendererParams } from "ag-grid-community";
import CellWrapper from "./CellWrapper";
import AddEntry from "../../AddEntry";
import { Iloadunload } from "../../../utils/types/access";

const AddEntryTime = ({
  setShowModal,
  params,
  setTargetDetail,
}: {
  params: ICellRendererParams;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTargetDetail: React.Dispatch<React.SetStateAction<Iloadunload>>;
}) => {
  const { horarioentrada } = params.data;
  const openModal = () => {
    setTargetDetail(params.data as Iloadunload);
    setShowModal(true);
  };
  return (
    <CellWrapper>
      {horarioentrada ? (
        <p>{horarioentrada}</p>
      ) : (
        <AddEntry action={openModal} label="Entrada" />
      )}
    </CellWrapper>
  );
};

export default AddEntryTime;
