import { Route, Routes } from "react-router";
import MenuPage from "../../pages/menu";
import PageWrapper from "../../pages/PageWrapper";
import InboundOutboundPage from "../../pages/inboundOutbound";
import ReceivingPage from "../../pages/ReceivingPage";
import AccessPage from "../../pages/AccessPage";
import { ScheduledAccessProvider } from "../../common/context/ScheduledAccessContext";
import { LoadunloadProvider } from "../../common/context/loadunload";
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
        <Route path="/recebimento" element={<ReceivingPage />} />
        <Route
          path="/acessos"
          element={
            <ScheduledAccessProvider>
              <AccessPage />
            </ScheduledAccessProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
