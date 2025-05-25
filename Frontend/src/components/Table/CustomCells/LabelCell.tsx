import { ICellRendererParams } from "ag-grid-community";
import Label, { labelColors } from "../../Label";
import CellWrapper from "./CellWrapper";

const COLORS_MAP: Record<string, labelColors> = {
  Descarga: "orange",
  Carga: "green",
  Retirado: "green",
  Recebido: "orange",
  Liberado: "green",
  Pendente: "orange",
  Bloqueado: "red",
  Entrada: "green",
  Saída: "orange",
};

const LabelCell = (params: ICellRendererParams) => {
  const color: labelColors = COLORS_MAP[params.value];

  return (
    <CellWrapper>
      <Label color={color} label={params.value} />
    </CellWrapper>
  );
};

export default LabelCell;
