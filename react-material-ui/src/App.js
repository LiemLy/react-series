import Button from './pages/Button'
import AppBar from './components/AppBar'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <AppBar />

      <Switch>
        <Route exact path="/button">
          <Button />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
