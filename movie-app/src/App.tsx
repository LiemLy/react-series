import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { AppProvider } from "./states";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import PopularPage from "./pages/movies/Popular";
import Footer from "./components/Footer";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="antialiased">
          <Navbar />

          <div
            style={{ minHeight: "calc(100vh - 15rem)" }}
            className="w-4/5 m-auto"
          >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/movie/popular">
                <PopularPage />
              </Route>
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
