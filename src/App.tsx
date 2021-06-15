import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";
import ProjectList from "./components/ProjectList";
import Dwayne from "./pages/dwayne";
import Goosepack from "./pages/goosepack"

function App() {
  return (
    <Router>
      <div className="app">
        <Logo />
        <Switch>
            <Route exact path="/" component={ProjectList} />
            <Route exact path="/dwayne" component={Dwayne} />
            <Route exact path="/goosepack" component={Goosepack} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
