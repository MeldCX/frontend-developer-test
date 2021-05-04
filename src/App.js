import "./App.css";
import LoginContainer from "./container/LoginContainer";
import PanelContainer from "./container/PanelContainer";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LoginContainer} />
        <Route path="/panel" component={PanelContainer} />
      </Router>
    </div>
  );
}
