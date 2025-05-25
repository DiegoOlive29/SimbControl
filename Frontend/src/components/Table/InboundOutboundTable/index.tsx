import { useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { tableTheme } from "../setup";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import LabelCell from "../CustomCells/LabelCell";
import InboundOutboundOptions from "../CustomCells/InboundOutboundOptions";
import AddEntryTime from "../CustomCells/AddEntryTime";
import AddLeavingTime from "../CustomCells/AddLeavingTime";
import DeleteModal from "../../Modal/ModalCollection/DeleteModal";
import InOutModal from "../../Modal/ModalCollection/InOutModal";
import { useLoadUnload } from "../../../common/context/loadunload";
import { Iloadunload } from "../../../utils/types/access";
const mock = {
  id: "4d598ed0-782c-4071-afe8-60cfd5fb5156",
  placa: "STU9M67",
  motorista: "Gabriel Lima",
  veiculo: "Van de Carga",
  data: "19/12/2024",
  chegadaportaria: "10:00",
  horarioentrada: "10:45",
  horariosaida: "11:45",
  atividade: "Carga",
};
const InboundOutboundTable = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEntryModal, setShowEntryModal] = useState(false);
  const [showOutModal, setShowOutModal] = useState(false);
  const [targetDetail, setTargetDetail] = useState<Iloadunload>(mock);

  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const defaultColDef = useMemo(() => {
    return {
      flex: 10,
    };
  }, []);

  const columns: ColDef[] = [
    {
      minWidth: 100,
      headerName: "Placa",
      field: "placa",
      cellStyle: {
        textAlign: "center",
      },
    },
    {
      minWidth: 100,
      headerName: "Motorista",
      field: "motorista",
    },
    {
      minWidth: 100,
      headerName: "Veículo",
      field: "veiculo",
    },
    {
      minWidth: 100,
      headerName: "Data",
      field: "data",
    },
    {
      minWidth: 100,
      headerName: "Chegada na portaria",
      field: "chegadaportaria",
    },
    {
      minWidth: 100,
      headerName: "Horário de entrada",
      cellRenderer: (params: ICellRendererParams) => (
        <AddEntryTime
          params={params}
          setShowModal={setShowEntryModal}
          setTargetDetail={setTargetDetail}
        />
      ),
    },
    {
      minWidth: 100,
      headerName: "Horário de saída",
      cellRenderer: (params: ICellRendererParams) => (
        <AddLeavingTime
          params={params}
          setShowModal={setShowOutModal}
          setTargetDetail={setTargetDetail}
        />
      ),
    },
    {
      minWidth: 100,
      headerName: "Atividade",
      field: "atividade",
      cellRenderer: LabelCell,
    },
    {
      minWidth: 100,
      headerName: "Opções",
      field: "opcoes",
      cellRenderer: (params: ICellRendererParams) => (
        <InboundOutboundOptions
          params={params}
          setShowDeleteModal={setShowDeleteModal}
          setTargetDetail={setTargetDetail}
        />
      ),
    },
    {
      headerName: "",
      field: "empty",
      // A coluna com flex, vai preencher o espaço vazio
      flex: 1,
      minWidth: 150, // Defina um tamanho mínimo, se necessário
      suppressMovable: true, // Impede que a coluna seja movida
    },
  ];

  const {
    getloadunload,
    isLoadingloadunload,
    scheduledAccess,
    loadunloadDelete,
  } = useLoadUnload();
  useEffect(() => {
    getloadunload();
  }, []);

  const handleDelete = async () => {
    await loadunloadDelete(targetDetail.id);
    await getloadunload();

    setShowDeleteModal(false);
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={"ag-theme-quartz-dark"}>
        <AgGridReact
          rowData={scheduledAccess}
          defaultColDef={defaultColDef}
          columnDefs={columns}
          theme={tableTheme}
          loading={isLoadingloadunload}
        />
        {showDeleteModal && (
          <DeleteModal
            deleteFunction={handleDelete}
            description="Tem certeza que deseja deletar o registro deste veículo"
            handleOpenState={setShowDeleteModal}
            title="Deletar registro do veículo"
          />
        )}
        {showEntryModal && (
          <InOutModal
            handleOpenState={setShowEntryModal}
            action="in"
            registryFunction={() => ""}
            id={targetDetail.id}
          />
        )}
        {showOutModal && (
          <InOutModal
            handleOpenState={setShowOutModal}
            action="out"
            registryFunction={() => ""}
            id={targetDetail.id}
          />
        )}
      </div>
    </div>
  );
};

export default InboundOutboundTable;
