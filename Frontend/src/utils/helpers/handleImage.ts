export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
): void => {
  const target = event.currentTarget as HTMLImageElement;
  target.onerror = null;
  target.src =
    "Frontend/public/assets/images/error_circle_regular_icon_205298.png";
};

export const setFileOnInput = (
  event: React.ChangeEvent<HTMLInputElement>,
  changePreviewState: React.Dispatch<React.SetStateAction<string>>,
  changeFileState:
    | React.Dispatch<React.SetStateAction<File | null>>
    | ((file: File) => void)
): void => {
  const files = event.target.files;
  if (files) {
    changePreviewState(URL.createObjectURL(files[0]));
    changeFileState(files[0]);
  }
};
