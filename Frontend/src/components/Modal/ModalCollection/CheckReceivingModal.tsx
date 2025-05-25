import { FiCheckCircle } from "react-icons/fi";
import ModalWrapper from "../ModalWrapper";
import Button from "../../Button";
import InputText from "../../Inputs/InputText";
import { useState } from "react";

const ModalTitle = () => {
  return (
    <div className="flex gap-4">
      <div className="border-solid border-8 border-green-soft rounded-full bg-green-light p-3 w-min">
        <FiCheckCircle className="text-2xl text-green-dark" />
      </div>
      <div>
        <p className="font-semibold text-lg text-black-soft">
          Marcar volume(s) como retirados
        </p>
        <p className="text-sm text-gray-steel">
          Indique quem está realizando a retirada na portaria
        </p>
      </div>
    </div>
  );
};

interface Props {
  handleOpenState: React.Dispatch<React.SetStateAction<boolean>>;
  checkFunction: () => void;
}

const CheckReceivingModal = ({ handleOpenState, checkFunction }: Props) => {
  const [pickedUpBy, setPickedUpBy] = useState("");

  return (
    <ModalWrapper handleOpenState={handleOpenState} modalTitle={<ModalTitle />}>
      <InputText
        topLabel="Retirado por"
        value={pickedUpBy}
        changeValue={setPickedUpBy}
      />
      <div className="flex gap-3 ml-auto">
        <Button
          color="white"
          title="Cancelar"
          onClick={() => handleOpenState(false)}
        />
        <Button color="blue" title="Confirmar" onClick={checkFunction} />
      </div>
    </ModalWrapper>
  );
};

export default CheckReceivingModal;
