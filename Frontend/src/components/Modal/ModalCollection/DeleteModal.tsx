import { FiTrash2 } from "react-icons/fi";
import ModalWrapper from "../ModalWrapper";
import Button from "../../Button";

interface ModalTitleProps {
  title: string;
  description: string;
}

const ModalTitle = ({ description, title }: ModalTitleProps) => {
  return (
    <div className="flex gap-4">
      <div className="border-solid border-8 border-red-soft rounded-full bg-red-light p-3 w-min">
        <FiTrash2 className="text-2xl text-red-medium" />
      </div>
      <div>
        <p className="font-semibold text-lg text-black-soft">{title}</p>
        <p className="text-sm text-gray-steel">{description}</p>
      </div>
    </div>
  );
};

interface Props extends ModalTitleProps {
  handleOpenState: React.Dispatch<React.SetStateAction<boolean>>;
  deleteFunction: () => void;
}

const DeleteModal = ({
  handleOpenState,
  description,
  title,
  deleteFunction,
}: Props) => {
  return (
    <ModalWrapper
      handleOpenState={handleOpenState}
      modalTitle={<ModalTitle description={description} title={title} />}
    >
      <div className="flex gap-3 ml-auto">
        <Button
          color="white"
          title="Cancelar"
          onClick={() => handleOpenState(false)}
        />
        <Button color="red" title="Deletar" onClick={deleteFunction} />
      </div>
    </ModalWrapper>
  );
};

export default DeleteModal;
