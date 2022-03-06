import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import Navbar from './Components/Home/Navbar'
import Home from './Components/Home/Home'




const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
