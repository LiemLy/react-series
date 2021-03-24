import Button from "./pages/Button";
import AppBar from "./components/AppBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ButtonGroup from "./pages/ButtonGroup";
import Checkbox from "./pages/Checkbox";
import FloatingActionButton from "./pages/FloatingActionButton";
import DateTime from "./pages/DateTime";
import { ThemeProvider, makeStyles, Toolbar } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import SideBar from "./components/SideBar";
import RadioButton from "./pages/RadioButton";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
    },
  },
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      minHeight: "100vh",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      // height: `calc(100% - ${theme.mixins.toolbar.height})`,
    },
  };
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar className={classes.appBar} />
        <SideBar classes={classes} />

        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route exact path="/button-group">
              <ButtonGroup />
            </Route>

            <Route exact path="/button">
              <Button />
            </Route>

            <Route exact path="/checkbox">
              <Checkbox />
            </Route>

            <Route exact path="/date-time">
              <DateTime />
            </Route>

            <Route exact path="/floating-action-button">
              <FloatingActionButton />
            </Route>

            <Route exact path="/floating-action-button">
              <FloatingActionButton />
            </Route>

            <Route exact path="/radio-button">
              <RadioButton />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
