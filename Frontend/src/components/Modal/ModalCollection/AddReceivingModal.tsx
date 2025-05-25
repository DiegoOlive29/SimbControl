import { useState } from "react";
import ModalWrapper from "../ModalWrapper";
import Button from "../../Button";
import IconBox from "../../IconBox";
import { FiPackage } from "react-icons/fi";
import InputTime from "../../Inputs/InputTime";
import InputDate from "../../Inputs/InputDate";
import InputText from "../../Inputs/InputText";
import InputNumber from "../../Inputs/InputNumber";
import TextArea from "../../Inputs/TextArea";
import InputToggle from "../../Inputs/InputToggle";
import { InputImage } from "../../Inputs/InputImage";

interface AddRecebimentoFormData {
  sender: string;
  recipient: string;
  volumes: string;
  nf: string;
  arrivalDate: string;
  arrivalTime: string;
  receivedBy: string;
  observation: string;
  hasDivergences: boolean;
  image: File | null;
}

interface Props {
  handleOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddReceivingModal = ({ handleOpenState }: Props) => {
  const [formData, setFormData] = useState<AddRecebimentoFormData>({
    sender: "",
    recipient: "",
    volumes: "",
    nf: "",
    arrivalDate: "",
    arrivalTime: "",
    receivedBy: "",
    observation: "",
    hasDivergences: false,
    image: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  return (
    <ModalWrapper
      modalTitle={<IconBox icon={FiPackage} />}
      handleOpenState={handleOpenState}
    >
      <div className="font-roboto">
        <h2 className="text-lg font-semibold text-black-soft">
          Adicionar Recebimento
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <InputText
                changeValue={(value) =>
                  setFormData({ ...formData, sender: value })
                }
                topLabel="Remetente"
                placeholder="Nome do remetente..."
                value={formData.sender}
              />
            </div>
            <div className="flex flex-col gap-2">
              <InputText
                changeValue={(value) =>
                  setFormData({ ...formData, recipient: value })
                }
                topLabel="Destinatário"
                placeholder="Nome do destinatário..."
                value={formData.recipient}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <InputNumber
                changeValue={(value) =>
                  setFormData({ ...formData, volumes: value })
                }
                topLabel="Volumes"
                placeholder="Quantidade"
                value={formData.volumes}
              />
            </div>
            <div className="flex flex-col gap-2">
              <InputText
                changeValue={(value) => setFormData({ ...formData, nf: value })}
                topLabel="Nota Fiscal"
                placeholder="Digite a NF..."
                value={formData.nf}
              />
            </div>
          </div>
          <div className="flex gap-2 items-start justify-start max-w-[228px]">
            <InputText
              changeValue={(value) =>
                setFormData({ ...formData, receivedBy: value })
              }
              topLabel="Recebido por"
              placeholder="Nome do recebedor..."
              value={formData.receivedBy}
            />
          </div>

          <div className="flex gap-4">
            <InputDate
              topLabel="Data de Chegada"
              changeValue={(value: string) =>
                setFormData({ ...formData, arrivalDate: value })
              }
              value={formData.arrivalDate}
            />
            <InputTime
              topLabel="Horário de Chegada"
              changeValue={(value: string) =>
                setFormData({ ...formData, arrivalTime: value })
              }
              value={formData.arrivalTime}
            />
          </div>

          <div className="flex flex-col gap-2">
            <TextArea
              changeValue={(value) =>
                setFormData({ ...formData, observation: value })
              }
              topLabel="Observação"
              placeholder="Descreva detalhes..."
              value={formData.observation}
            />
          </div>
          <div className="flex items-center gap-2">
            <InputToggle
              isActive={formData.hasDivergences}
              buttonFunction={() =>
                setFormData({
                  ...formData,
                  hasDivergences: !formData.hasDivergences,
                })
              }
              label="Recebimento com Divergências"
            />
          </div>
          {formData.hasDivergences && (
            <InputImage
              changeFileState={(value: File) =>
                setFormData({
                  ...formData,
                  image: value,
                })
              }
              fileValue={formData.image}
            />
          )}

          <div className="flex justify-end gap-4 mt-4">
            <Button
              color="white"
              title="Cancelar"
              onClick={() => handleOpenState(false)}
            />
            <Button color="blue" title="Salvar" type="submit" />
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default AddReceivingModal;
