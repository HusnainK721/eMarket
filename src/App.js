import React from "react";
import { Provider } from "react-redux";
import { configStore } from "./state/store/configStore";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const localStore = configStore();
  return (
    
      <div>
      <Provider store={localStore}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;