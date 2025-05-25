import { useEffect, useRef, useState } from "react";
import {
  handleImageError,
  setFileOnInput,
} from "../../../utils/helpers/handleImage";
import { FiImage, FiUploadCloud } from "react-icons/fi";

interface IInputImage {
  changeFileState:
    | React.Dispatch<React.SetStateAction<File | null>>
    | ((file: File) => void);
  fileValue: File | null;
  required?: boolean;
}

const handleChange = {
  setFileOnInput,
};

export const InputImage = ({
  changeFileState,
  required = false,
  fileValue,
}: IInputImage): JSX.Element => {
  const [preview, setPreview] = useState("");

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    if (inputFileRef.current) inputFileRef.current.value = "";
  };

  useEffect(() => {
    if (!fileValue) {
      handleClear();
    }
  }, [fileValue]);

  return (
    <div className="w-full flex flex-col gap-3">
      <input
        ref={inputFileRef}
        type="file"
        className="hidden"
        data-testid="input-file"
        accept="image/*"
        onChange={(event) =>
          handleChange.setFileOnInput(event, setPreview, changeFileState)
        }
        required={required}
      />
      {!preview && (
        <div
          className="flex items-end gap-5 cursor-pointer"
          onClick={() => !preview && inputFileRef.current?.click()}
        >
          <div className="flex items-center justify-center p-4 rounded-full bg-gray-background">
            <FiImage className="" />
          </div>
          <div className="py-[10px] px-2 border border-gray-light rounded-md">
            <div className="flex items-center gap-2 text-gray-dark font-medium text-sm">
              <FiUploadCloud /> Carregar Foto
            </div>
          </div>
        </div>
      )}
      {preview && (
        <img
          className="w-full"
          src={preview}
          onError={handleImageError}
          alt="logo"
        />
      )}
    </div>
  );
};
