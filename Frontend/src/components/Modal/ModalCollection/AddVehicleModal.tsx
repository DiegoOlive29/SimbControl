import { useState } from "react";
import ModalWrapper from "../ModalWrapper";
import Button from "../../Button";
import IconBox from "../../IconBox";
import { FiTruck } from "react-icons/fi";
import Select from "../../Inputs/Select";
import InputTime from "../../Inputs/InputTime";
import InputDate from "../../Inputs/InputDate";

interface AddVehicleFormData {
  driver: string;
  vehicle: string;
  plate: string;
  date: string;
  time: string;
  cargo: string;
}

interface Props {
  handleOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddVehicleModal = ({ handleOpenState }: Props) => {
  const [formData, setFormData] = useState<AddVehicleFormData>({
    driver: "",
    vehicle: "",
    plate: "",
    date: "",
    time: "",
    cargo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <ModalWrapper
      modalTitle={<IconBox icon={FiTruck} />}
      handleOpenState={handleOpenState}
    >
      <div className="font-roboto">
        <h2 className="text-lg font-semibold text-black-soft">
          Adicionar Veículo
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="label pl-0">
              <span className="label-text font-roboto text-gray-600 whitespace-nowrap">
                Motorista
              </span>
            </div>
            <input
              type="text"
              placeholder="Nome do motorista..."
              className="p-2 border rounded-md bg-white border-gray-light"
              value={formData.driver}
              onChange={(e) =>
                setFormData({ ...formData, driver: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select
              defaultText="Selecione o veículo"
              label="Veículo"
              onChange={(value: string) =>
                setFormData({ ...formData, vehicle: value })
              }
              options={[
                { value: "Carro", label: "Carro" },
                { value: "Caminhão", label: "Caminhão" },
              ]}
              value={formData.vehicle}
            />
            <div className="flex flex-col gap-2">
              <div className="label pl-0">
                <span className="label-text font-roboto text-gray-600 whitespace-nowrap">
                  Placa
                </span>
              </div>
              <input
                type="text"
                placeholder="Digite a placa"
                className="p-2 border rounded-md bg-white border-gray-light"
                value={formData.plate}
                onChange={(e) =>
                  setFormData({ ...formData, plate: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2 col-span-1">
              <InputDate
                topLabel="Data"
                changeValue={(value: string) =>
                  setFormData({ ...formData, date: value })
                }
                value={formData.date}
              />
            </div>
            <div className="flex flex-col gap-2 col-span-1">
              <InputTime
                topLabel="Chegada na portaria"
                changeValue={(value: string) =>
                  setFormData({ ...formData, time: value })
                }
                value={formData.time}
              />
            </div>
            <div className="flex flex-col gap-2 col-span-1">
              <Select
                defaultText="Selecione a atividade"
                label="Atividade"
                onChange={(value: string) =>
                  setFormData({ ...formData, cargo: value })
                }
                options={[
                  { value: "loading", label: "Carga" },
                  { value: "unloading", label: "Descarga" },
                ]}
                value={formData.cargo}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <Button
              color="white"
              title="Cancelar"
              onClick={() => handleOpenState(false)}
            />
            <Button color="blue" title="Salvar" />
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default AddVehicleModal;
