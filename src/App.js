// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { configStore } from './state/store/configStore';
import {Home} from './component/Home';

function App() {
  const localStore=configStore();
  return (
    <div className="App">
      <Provider store={localStore}>
     <Home/>
     </Provider>
    </div>
  );
}

export default App;
