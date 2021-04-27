import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { AppProvider } from "./states";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <div className="w-3/5 m-auto">
            <h1 className="mt-16 text-5xl font-bold text-center">
              <Link to="/">Character Wiki</Link>
            </h1>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/:name">
                <Detail />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
