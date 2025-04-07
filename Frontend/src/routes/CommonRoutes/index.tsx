import { Routes, Route } from "react-router";
import LoginPage from "../../pages/login";

const CommonRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default CommonRoutes;
