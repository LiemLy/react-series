import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { AppProvider } from "./states";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Navbar />

          <div className="w-3/5 m-auto">
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
