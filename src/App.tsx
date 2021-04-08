import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";
import ProjectList from "./components/ProjectList";
import Dwayne from "./pages/dwayne";

function App() {
  return (
    <Router>
      <div className="app">
        <Logo />
        <Switch>
            <Route exact path="/" component={ProjectList} />
            <Route exact path="/dwayne" component={Dwayne} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
