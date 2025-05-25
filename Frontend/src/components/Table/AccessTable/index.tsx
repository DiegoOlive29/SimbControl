import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { tableTheme } from "../setup";
import { ColDef } from "ag-grid-community";
import LabelCell from "../CustomCells/LabelCell";

const AccessTable = () => {
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
    },
    {
      headerName: "Horario do Registro",
      field: "time",
      minWidth: 100,
    },
    {
      headerName: "Tipo de acesso",
      field: "accessType",
      minWidth: 100,
    },
    {
      headerName: "Status",
      field: "status",
      cellRenderer: LabelCell,
      minWidth: 100,
    },
    {
      headerName: "",
      field: "empty",
      flex: 1,
      minWidth: 150, // Defina um tamanho mínimo, se necessário
      suppressMovable: true, // Impede que a coluna seja movida
    },
  ];

  const rows = [
    {
      name: "Ana Oliveira",
      date: "13/05/2022",
      time: "10:00",
      accessType: "Colaborador",
      status: "Entrada",
      options: ["info", "delete"],
    },
    {
      name: "João Pereira",
      date: "13/05/2022",
      time: "10:00",
      accessType: "Colaborador",
      status: "Entrada",
      options: ["info", "delete"],
    },
    {
      name: "Carla Mendes",
      date: "13/05/2022",
      time: "10:00",
      accessType: "Prestador",
      status: "Saída",
      options: ["info", "delete"],
    },
    {
      name: "Lucas Almeida",
      date: "13/05/2022",
      time: "10:00",
      accessType: "Colaborador",
      status: "Saída",
      options: ["info", "delete"],
    },
    {
      name: "Mariana Costa",
      date: "13/05/2022",
      time: "10:00",
      accessType: "Colaborador",
      status: "Saída",
      options: ["info", "delete"],
    },
    {
      name: "Pedro Silva",
      date: "13/05/2022",
      time: "10:00",
      accessType: "Prestador",
      status: "Entrada",
      options: ["info", "delete"],
    },
    {
      name: "Rafaela Santos",
      date: "13/05/2022",
      time: "10:00",
      accessType: "Visitante",
      status: "Entrada",
      options: ["info", "delete"],
    },
    {
      name: "Gabriel Souza",
      date: "13/05/2022",
      time: "10:00",
      accessType: "Colaborador",
      status: "Entrada",
      options: ["info", "delete"],
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
      </div>
    </div>
  );
};

export default AccessTable;
