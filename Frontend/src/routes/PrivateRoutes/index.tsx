import { Route, Routes } from "react-router";
import MenuPage from "../../pages/menu";
import PageWrapper from "../../pages/PageWrapper";
import { LoadunloadProvider } from "../../common/context/loadunload";
import InboundOutboundPage from "../../pages/inboundOutbound";
const PrivateRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="/" element={<PageWrapper />}>
        <Route
          path="/carga-descarga"
          element={
            <LoadunloadProvider>
              <InboundOutboundPage />
            </LoadunloadProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
