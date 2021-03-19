import Button from './pages/Button'
import AppBar from './components/AppBar'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import ButtonGroup from './pages/ButtonGroup'
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
    },
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar />
        <Switch>
          <Route exact path="/button-group">
            <ButtonGroup />
          </Route>

          <Route exact path="/button">
            <Button />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
