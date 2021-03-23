import React from "react";
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Button,
  Icon,
  makeStyles,
} from "@material-ui/core";
import { Menu, GitHub, Facebook, YouTube } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  };
});

const AppBarComponent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            edge="start"
          >
            <Menu />
          </IconButton>

          <div className={classes.title}>
            <Button component={Link} to={"/"} color="inherit">
              REACT MATERIAL UI
            </Button>
          </div>

          {/* <Typography component={Link} to={'/'} variant="h6" className={classes.title}> <Home></Home>REACT MATERIAL UI</Typography> */}

          <IconButton
            className={classes.menuButton}
            color="inherit"
            edge="start"
          >
            <GitHub />
          </IconButton>

          <IconButton
            className={classes.menuButton}
            color="inherit"
            edge="start"
          >
            <Facebook />
          </IconButton>

          <IconButton
            className={classes.menuButton}
            color="inherit"
            edge="start"
          >
            <YouTube />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default AppBarComponent;
