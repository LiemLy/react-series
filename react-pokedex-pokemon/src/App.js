import ButtonAppBar from './components/ButtonAppBar'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Pokedex from './pages/Pokedex'
import Container from '@material-ui/core/Container';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ButtonAppBar />

        <Container maxWidth="md">
          <Pokedex />
        </Container>


      </div>
    </ThemeProvider>

  );
}

export default App;
