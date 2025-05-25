import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { tableTheme } from "../setup";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import LabelCell from "../CustomCells/LabelCell";
import ReceivingOptions from "../CustomCells/ReceivingOptions";
import ReceivingDetailsModal from "../../Modal/ModalCollection/ReceivingDetailModal";
import DeleteModal from "../../Modal/ModalCollection/DeleteModal";

export interface ReceivingItem {
  remetente: string;
  destinatario: string;
  recebido_por: string;
  nf: string;
  data: string;
  horario_de_recebimento: string;
  volumes: number;
  descricao: string;
  status: string;
  image: string;
  observation: string;
}

const mockItem: ReceivingItem = {
  remetente: "Ana Oliveira",
  destinatario: "Lucas Oliveira",
  recebido_por: "Rodrigo Gonçalves",
  nf: "453-1",
  data: "13/05/2022",
  horario_de_recebimento: "10:00",
  volumes: 1,
  descricao: "Caixa com tendo 10 unidades de canetas esferográficas azuis",
  status: "Retirado",
  observation: "Lorem",
  image:
    "https://plus.unsplash.com/premium_photo-1683133263716-731795d25343?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fHww",
};

const ReceivingTable = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [targeDetail, setTargetDetail] = useState<ReceivingItem>(mockItem);
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const defaultColDef = useMemo(() => {
    return {
      flex: 10,
    };
  }, []);

  const columns: ColDef[] = [
    {
      headerName: "Remetente",
      field: "remetente",
      cellStyle: {
        textAlign: "center",
      },
      minWidth: 100,
    },
    {
      headerName: "Destinatário",
      field: "destinatario",
      minWidth: 100,
    },
    {
      headerName: "Recebido por",
      field: "recebido_por",
      minWidth: 100,
    },
    {
      headerName: "NF-e",
      field: "nf",
      minWidth: 100,
    },
    {
      headerName: "Data",
      field: "data",
      minWidth: 100,
    },
    {
      headerName: "Horario de Recebimento",
      field: "horario_de_recebimento",
      minWidth: 100,
    },
    {
      headerName: "Volumes",
      field: "volumes",
      minWidth: 100,
    },
    {
      headerName: "Descrição",
      field: "descricao",
      minWidth: 100,
    },
    {
      headerName: "status",
      field: "status",
      minWidth: 100,
      cellRenderer: LabelCell,
    },
    {
      headerName: "Opções",
      field: "opcoes",
      cellRenderer: (params: ICellRendererParams) => (
        <ReceivingOptions
          params={params}
          setShowDetailModal={setShowDetailModal}
          setTargetDetail={setTargetDetail}
          setShowDeleteModal={setShowDeleteModal}
        />
      ),
      minWidth: 200,
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

  const rows = [
    {
      remetente: "Ana Oliveira",
      destinatario: "Lucas Oliveira",
      recebido_por: "Rodrigo Gonçalves",
      nf: "453-1",
      data: "13/05/2022",
      horario_de_recebimento: "10:00",
      volumes: 1,
      descricao: "Caixa com tendo 10 unidades de canetas esferográficas azuis",
      status: "Retirado",
      acoes: ["editar", "deletar"],
      observation: "Lorem",
      image:
        "https://plus.unsplash.com/premium_photo-1683133263716-731795d25343?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fHww",
    },
    {
      remetente: "João Pereira",
      destinatario: "Mariana Almeida",
      recebido_por: "Rodrigo Gonçalves",
      nf: "453-1",
      data: "13/05/2022",
      horario_de_recebimento: "10:00",
      volumes: 2,
      descricao: "Pacote com 5 camisetas de algodão tamanho M",
      status: "Retirado",
      acoes: ["editar", "deletar"],
      observation: "Lorem",
      image:
        "https://plus.unsplash.com/premium_photo-1683133263716-731795d25343?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fHww",
    },
    {
      remetente: "Carla Mendes",
      destinatario: "Rafael Santos",
      recebido_por: "Rodrigo Gonçalves",
      nf: "453-1",
      data: "13/05/2022",
      horario_de_recebimento: "10:00",
      volumes: 1,
      descricao: "Notebook modelo XYZ com carregador incluso",
      status: "Recebido",
      acoes: ["editar", "deletar"],
      observation: "Lorem",
      image:
        "https://plus.unsplash.com/premium_photo-1683133263716-731795d25343?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fHww",
    },
    {
      remetente: "Lucas Almeida",
      destinatario: "Ana Costa",
      recebido_por: "Rodrigo Gonçalves",
      nf: "453-1",
      data: "13/05/2022",
      horario_de_recebimento: "10:00",
      volumes: 1,
      descricao: "Lote de 20 cadernos pautados capa dura",
      status: "Recebido",
      acoes: ["editar", "deletar"],
      observation: "Lorem",
      image:
        "https://plus.unsplash.com/premium_photo-1683133263716-731795d25343?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fHww",
    },
    {
      remetente: "Mariana Costa",
      destinatario: "João Pereira",
      recebido_por: "Rodrigo Gonçalves",
      nf: "453-1",
      data: "13/05/2022",
      horario_de_recebimento: "10:00",
      volumes: 2,
      descricao: "Conjunto de panelas antiaderentes com 5 peças",
      status: "Recebido",
      acoes: ["editar", "deletar"],
      observation: "Lorem",
      image:
        "https://plus.unsplash.com/premium_photo-1683133263716-731795d25343?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fHww",
    },
    {
      remetente: "Pedro Silva",
      destinatario: "Beatriz Machado",
      recebido_por: "Rodrigo Gonçalves",
      nf: "453-1",
      data: "13/05/2022",
      horario_de_recebimento: "10:00",
      volumes: 2,
      descricao: "Caixa de 50 máscaras descartáveis",
      status: "Retirado",
      acoes: ["editar", "deletar"],
      observation: "Lorem",
      image:
        "https://plus.unsplash.com/premium_photo-1683133263716-731795d25343?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fHww",
    },
    {
      remetente: "Rafaela Santos",
      destinatario: "Gabriel Lima",
      recebido_por: "Rodrigo Gonçalves",
      nf: "453-1",
      data: "13/05/2022",
      horario_de_recebimento: "10:00",
      volumes: 1,
      descricao: "Pacote com 3 frascos de shampoo de 500 ml",
      status: "Retirado",
      acoes: ["editar", "deletar"],
      observation: "Lorem",
      image:
        "https://plus.unsplash.com/premium_photo-1683133263716-731795d25343?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fHww",
    },
    {
      remetente: "Gabriel Souza",
      destinatario: "Camila Rocha",
      recebido_por: "Rodrigo Gonçalves",
      nf: "453-1",
      data: "13/05/2022",
      horario_de_recebimento: "10:00",
      volumes: 1,
      descricao: "Monitor LED de 24 polegadas, novo",
      status: "Retirado",
      acoes: ["editar", "deletar"],
      observation: "Lorem",
      image:
        "https://plus.unsplash.com/premium_photo-1683133263716-731795d25343?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fHww",
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={"ag-theme-quartz-dark"}>
        <AgGridReact
          rowData={rows}
          defaultColDef={defaultColDef}
          columnDefs={columns}
          theme={tableTheme}
        />
        {showDetailModal && (
          <ReceivingDetailsModal
            handleOpenState={setShowDetailModal}
            item={targeDetail}
          />
        )}
        {showDeleteModal && (
          <DeleteModal
            deleteFunction={() => ""}
            description="Tem certeza que deseja deletar o registro deste recebimento"
            handleOpenState={setShowDeleteModal}
            title="Deletar registro do recebimento"
          />
        )}
      </div>
    </div>
  );
};

export default ReceivingTable;
