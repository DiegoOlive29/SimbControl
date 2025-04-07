import { useEffect, useState } from "react";
import { useAlert } from "../../common/context/AlertContext";

const Toast = (): JSX.Element => {
  const [showDiv, setShowDiv] = useState(false);

  const { type, message, setShowAlertModal } = useAlert();
  const modalStyle = type === "error" ? "alert-error" : "alert-success";

  useEffect(() => {
    setTimeout(() => {
      setShowDiv(true);
    }, 50);
  }, []);

  useEffect(() => {
    if (showDiv) {
      return () => {
        setShowAlertModal(false);
      };
    }
  }, [showDiv, setShowAlertModal]);

  return (
    <div className="toast toast-top toast-end">
      <div className={`alert ${modalStyle}`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
