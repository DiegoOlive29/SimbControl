import { useState } from "react";
import InputText from "../../components/Inputs/InputText";
import { handleDataChange } from "../../utils/helpers/handleDataChange";
import { useAuth } from "../../common/context/AuthContext";
import { FiLoader } from "react-icons/fi";
import InputPassword from "../../components/Inputs/InputPassword";
import { useAlert } from "../../common/context/AlertContext";
import Toast from "../../components/Toast";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const { signIn, isLoading } = useAuth();
  const { showAlertModal } = useAlert();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn(loginData);
  };

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="bg-white my-10 py-4 px-9 rounded-2xl flex flex-col items-center gap-14 w-full max-w-[590px] mx-4">
          <h1 className="font-michroma text-black-dark underline text-3xl">
            Simb<span className="font-bold">Controll</span>
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
          >
            <InputText
              styleType="variant"
              changeValue={(value: string) =>
                handleDataChange(loginData, setLoginData, "email", value)
              }
              className="!bg-neutral-dark"
              topLabel="Email"
              value={loginData.email}
            />
            <InputPassword
              styleType="variant"
              changeValue={(value: string) =>
                handleDataChange(loginData, setLoginData, "password", value)
              }
              className="!bg-neutral-dark"
              topLabel="Senha"
              value={loginData.password}
            />
            <button
              disabled={!loginData.email || !loginData.password || isLoading}
              className="bg-blue-dark py-4 rounded-md text-2xl font-jura px-24 mt-8 text-white disabled:opacity-60"
            >
              {isLoading && (
                <div className="flex items-center gap-1">
                  <p>Entrando</p>
                  <FiLoader className="animate-spin" />
                </div>
              )}
              {!isLoading && "Entrar"}
            </button>
          </form>
        </div>
      </div>
      {showAlertModal && <Toast />}
    </>
  );
};

export default LoginPage;
