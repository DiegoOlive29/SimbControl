import { useState } from "react";
import InputDate from "../Inputs/InputDate";

const TableController = () => {
  const [perPage, setPerPage] = useState("10");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-wrap gap-4 items-center p-4 max-w-5xl">
      <div className="flex items-center gap-2">
        <label className="text-gray-700">Mostrar</label>
        <select
          value={perPage}
          onChange={(e) => setPerPage(e.target.value)}
          className="border rounded px-2 py-1 bg-white border-gray-light"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span className="text-gray-700">Registros</span>
      </div>

      <InputDate value={startDate} changeValue={setStartDate} />

      <InputDate value={endDate} changeValue={setEndDate} />

      <div className="flex-1 max-w-[580px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-4 p-2 border rounded-md bg-white border-gray-light"
          />
          <svg
            className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TableController;
