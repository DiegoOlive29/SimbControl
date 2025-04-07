import { BrowserRouter } from "react-router";
import CommonRoutes from "./routes/CommonRoutes";

function App() {
  return (
    <BrowserRouter>
      <CommonRoutes />
    </BrowserRouter>
  );
}

export default App;
