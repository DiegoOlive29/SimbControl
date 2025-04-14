import { Route, Routes } from "react-router";
import MenuPage from "../../pages/menu";
import PageWrapper from "../../pages/PageWrapper";
const PrivateRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="/" element={<PageWrapper />}></Route>
    </Routes>
  );
};

export default PrivateRoutes;
