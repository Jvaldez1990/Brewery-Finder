import Main from "./Components/Main/Main";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConfigureStore } from "./Redux/configureStore";
import bootstrap from "bootstrap";
import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import BreweriesComponent from "./Components/BreweriesComponent";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ backgroundColor: "#DDA74F" }}>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
