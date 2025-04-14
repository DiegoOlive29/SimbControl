import { BrowserRouter } from "react-router";
import PrivateRoutes from "./routes/PrivateRoutes";
import CommonRoutes from "./routes/CommonRoutes";
import { useAuth } from "./common/context/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateRoutes /> : <CommonRoutes />}
    </BrowserRouter>
  );
}

export default App;
