import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
