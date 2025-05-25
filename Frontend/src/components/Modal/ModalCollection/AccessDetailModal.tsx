import { FiUserPlus } from "react-icons/fi";
import ModalWrapper from "../ModalWrapper";
import Button from "../../Button";
import IconBox from "../../IconBox";
import { useState } from "react";
import InputText from "../../Inputs/InputText";
import { ScheduleAccessItem } from "../../Table/ScheduleAccessTable";
import { useScheduledAccess } from "../../../common/context/ScheduledAccessContext";
import {
  IPostScheduleAccessResponseQRCode,
  Idenyentry,
} from "../../../service/scheduledAccess";

interface Props {
  handleOpenState: React.Dispatch<React.SetStateAction<boolean>>;
  item: ScheduleAccessItem;
}

const AccessDetailModal = ({ handleOpenState, item }: Props) => {
  const [email, setEmail] = useState("");
  const { postEmailQr, denyentrySchedules, getScheduleAccess } =
    useScheduledAccess();
  const { id } = item;

  const handleLiberar = async () => {
    if (!email) {
      alert("Por favor, insira um email.");
      return;
    }

    const payload: IPostScheduleAccessResponseQRCode = {
      email: "diego.o.guimaraes29@gmail.com",
    };

    await postEmailQr(id, payload);

    handleOpenState(false);
  };

  const handleBloquear = async () => {
    const payload: Idenyentry = {
      status: "Bloqueado",
    };

    await denyentrySchedules(id, payload);
    await getScheduleAccess();

    handleOpenState(false);
  };

  return (
    <ModalWrapper
      modalTitle={<IconBox icon={FiUserPlus} />}
      handleOpenState={handleOpenState}
    >
      <div className="text-sm text-gray-700 space-y-2">
        <p>
          <strong>Nome:</strong> {item.name}
        </p>
        <p>
          <strong>RG/CPF:</strong> {item.document}
        </p>
        <p>
          <strong>Tipo de acesso:</strong> {item.accessType}
        </p>
        <p>
          <strong>Data:</strong> {item.date} <strong>Tipo de acesso:</strong>{" "}
          {item.accessType}
        </p>
        <p>
          <strong>Liberado por:</strong> {item.responsible}
        </p>
      </div>
      <InputText
        changeValue={setEmail}
        topLabel="Email para acesso"
        value={email}
        placeholder="Digite o email"
      />

      <div className="flex justify-between">
        <Button
          onClick={() => handleOpenState(false)}
          color="white"
          title="Cancelar"
        />
        <Button color="blue" onClick={handleLiberar} title="Liberar" />
      </div>

      <Button
        onClick={handleBloquear}
        color="red"
        title="Bloquear"
        className="justify-center"
      />
    </ModalWrapper>
  );
};

export default AccessDetailModal;
