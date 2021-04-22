import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Element from "./pages/Element";

function App() {
  return (
    <MainLayout>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/elements">
            <Element />
          </Route>
        </Switch>
      </div>
    </MainLayout>
  );
}

export default App;
