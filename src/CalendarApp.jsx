import { AppRouter } from "./router";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    // Provider de redux
    <Provider store={store}>
      {/* Rutas  */}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
