import { AppRouter } from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      {/* Rutas  */}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
