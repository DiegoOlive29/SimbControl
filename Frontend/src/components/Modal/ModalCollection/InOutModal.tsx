import { FiTruck } from "react-icons/fi";
import ModalWrapper from "../ModalWrapper";
import Button from "../../Button";
import IconBox from "../../IconBox";
import InputTime from "../../InputTime";
import { useLoadUnload } from "../../../common/context/loadunload";
import { useState } from "react";

type Actions = "in" | "out";

interface Props {
  handleOpenState: React.Dispatch<React.SetStateAction<boolean>>;
  registryFunction: () => void;
  action: "in" | "out";
  id: string;
}

interface TextMapProps {
  title: string;
  inputLabel: string;
}

const InOutModal = ({ handleOpenState, action, id }: Props) => {
  const TEXT_MAP: Record<Actions, TextMapProps> = {
    in: { inputLabel: "Hora de entrada", title: "Registrar Entrada" },
    out: { inputLabel: "Hora de saída", title: "Registrar Saída" },
  };
  const [out, setout] = useState("");

  const { loadunloadOut, getloadunload, loadunloadEntry } = useLoadUnload();

  const handleOut = async () => {
    if (action == "in") {
      await loadunloadEntry(id, { horarioentrada: out });
    } else {
      await loadunloadOut(id, { horariosaida: out });
    }

    await getloadunload();

    handleOpenState(false);
  };

  return (
    <ModalWrapper
      handleOpenState={handleOpenState}
      modalTitle={<IconBox icon={FiTruck} />}
      className="md:min-w-[640px]"
    >
      <div className="flex gap-3 flex-col w-full">
        <p className="font-semibold text-lg text-black-soft">
          {TEXT_MAP[action].title}
        </p>
        <label className="text-gray-dark flex flex-col items-start">
          <InputTime
            topLabel={TEXT_MAP[action].inputLabel}
            changeValue={setout}
            value={out}
          />
        </label>
        <div className="flex gap-3">
          <Button
            color="white"
            title="Cancelar"
            onClick={() => handleOpenState(false)}
            className="flex-grow text-center items-center justify-center"
          />
          <Button
            color="blue"
            title="Salvar"
            onClick={handleOut}
            className="flex-grow text-center items-center justify-center"
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default InOutModal;
