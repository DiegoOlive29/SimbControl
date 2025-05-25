import { useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { tableTheme } from "../setup";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import LabelCell from "../CustomCells/LabelCell";
import ScheduledAccessOptions from "../CustomCells/ScheduledAccessOptions";
import AccessDetailModal from "../../Modal/ModalCollection/AccessDetailModal";
import { useScheduledAccess } from "../../../common/context/ScheduledAccessContext";
import { dateValueFormatter } from "../../../utils/helpers/dateValueFormatter";

export interface ScheduleAccessItem {
  id: string;
  name: string;
  date: string;
  document: string;
  responsible: string;
  accessType: string;
  permissionType: string;
  status: string;
}

const mock = {
  name: "Ana Oliveira",
  date: "13/05/2022",
  document: "00.000.000-0",
  responsible: "Lucas Oliveira",
  accessType: "Prestador",
  permissionType: "Único",
  status: "Liberado",
};

const ScheduleAccessTable = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [targetDetail, setTargetDetail] = useState<ScheduleAccessItem>(mock);
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const defaultColDef = useMemo(() => {
    return {
      flex: 10,
    };
  }, []);

  const columns: ColDef[] = [
    {
      headerName: "Nome",
      field: "name",
      cellStyle: {
        textAlign: "center",
      },
      minWidth: 100,
    },
    {
      headerName: "Data",
      field: "date",
      minWidth: 100,
      valueFormatter: dateValueFormatter,
    },
    {
      headerName: "RG/CPF",
      field: "document",
      minWidth: 100,
    },
    {
      headerName: "Responsavel",
      field: "responsible",
      minWidth: 100,
    },
    {
      headerName: "Tipo de acesso",
      field: "accessType",
      minWidth: 100,
    },
    {
      headerName: "Tipo de permissão",
      field: "permissionType",
      minWidth: 100,
    },
    {
      headerName: "Status",
      field: "status",
      cellRenderer: LabelCell,
      minWidth: 100,
    },
    {
      headerName: "Opções",
      field: "opcoes",
      cellRenderer: (params: ICellRendererParams) => (
        <ScheduledAccessOptions
          params={params}
          setShowDetailModal={setShowDetailModal}
          setTargetDetail={setTargetDetail}
        />
      ),
      minWidth: 250,
    },
    {
      headerName: "",
      field: "empty",
      flex: 1,
      minWidth: 150, // Defina um tamanho mínimo, se necessário
      suppressMovable: true, // Impede que a coluna seja movida
    },
  ];

  const { getScheduleAccess, isLoadingScheduleAccess, scheduledAccess } =
    useScheduledAccess();

  useEffect(() => {
    getScheduleAccess();
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={"ag-theme-quartz-dark"}>
        <AgGridReact
          loading={isLoadingScheduleAccess}
          rowData={scheduledAccess}
          defaultColDef={defaultColDef}
          columnDefs={columns}
          theme={tableTheme}
        />
        {showDetailModal && (
          <AccessDetailModal
            handleOpenState={setShowDetailModal}
            item={targetDetail}
          />
        )}
      </div>
    </div>
  );
};

export default ScheduleAccessTable;
