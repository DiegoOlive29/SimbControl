import { useState } from "react";
import ModalWrapper from "../ModalWrapper";
import Button from "../../Button";
import IconBox from "../../IconBox";
import { FiUserPlus } from "react-icons/fi";
import Select from "../../Inputs/Select";
import InputDate from "../../Inputs/InputDate";
import InputText from "../../Inputs/InputText";
import { ICreateScheduledAccessInput } from "../../../utils/types/access";
import { useScheduledAccess } from "../../../common/context/ScheduledAccessContext";
import { checkFilledForm } from "../../../utils/helpers/checkFieldForm";

interface Props {
  handleOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddScheduledAccessModal = ({ handleOpenState }: Props) => {
  const [formData, setFormData] = useState<ICreateScheduledAccessInput>({
    name: "",
    document: "",
    accessType: "",
    date: "",
    permissionType: "",
    responsible: "",
    status: "Pendente",
  });

  console.log(checkFilledForm(formData));

  const { addScheduleAccess, isLoadingAddScheduleAccess } =
    useScheduledAccess();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addScheduleAccess(formData);

    handleOpenState(false);
  };

  return (
    <ModalWrapper
      modalTitle={<IconBox icon={FiUserPlus} />}
      handleOpenState={handleOpenState}
    >
      <div className="font-roboto">
        <h2 className="text-lg font-semibold text-black-soft">
          Adicionar Acesso
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <InputText
              topLabel="Nome"
              value={formData.name}
              changeValue={(value: string) =>
                setFormData({ ...formData, name: value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <InputText
                topLabel="RG/CPF"
                value={formData.document}
                changeValue={(value: string) =>
                  setFormData({ ...formData, document: value })
                }
              />
            </div>
            <Select
              defaultText="Tipo de acesso"
              label="Tipo de acesso"
              onChange={(value: string) =>
                setFormData({ ...formData, accessType: value })
              }
              options={[
                { value: "Prestador", label: "Prestador" },
                { value: "Visita", label: "Visita" },
              ]}
              value={formData.accessType}
            />
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
              <Select
                defaultText="Tipo de permissão"
                label="Tipo de permissão"
                onChange={(value: string) =>
                  setFormData({ ...formData, permissionType: value })
                }
                options={[
                  { value: "Único", label: "Único" },
                  { value: "Diário", label: "Diário" },
                ]}
                value={formData.permissionType}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <Select
              defaultText="Liberado por"
              label="Liberado por"
              onChange={(value: string) =>
                setFormData({ ...formData, responsible: value })
              }
              options={[
                { value: "Gabriel", label: "Gabriel" },
                { value: "Luiz", label: "Luiz" },
              ]}
              value={formData.responsible}
            />
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <Button
              color="white"
              title="Cancelar"
              onClick={() => handleOpenState(false)}
              type="button"
            />
            <Button
              color="blue"
              title="Salvar"
              disabled={checkFilledForm(formData)}
              isLoading={isLoadingAddScheduleAccess}
            />
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default AddScheduledAccessModal;
