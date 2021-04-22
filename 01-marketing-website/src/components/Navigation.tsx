import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  nav: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "#442ab9",
    backgroundColor: "#e4f8ee",
  },
  header: {
    height: "7.5rem",
    width: "100%",
  },
}));

function Navigation() {
  const classes = useStyles();

  return (
    <div>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <div>
            <img src="/logo.svg" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
