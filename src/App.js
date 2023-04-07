import React from "react";
import Number from "./component/Number";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./component/User";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Number />
        <User />
      </div>
    </Provider>
  );
}

export default App;
