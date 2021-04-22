import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    section1: {
      color: "#fff",
      backgroundColor: "#442ab9",
    },
    section2: {},
  };
});

function Home() {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.section1}>
        <h1>Gatsby TakeShape Startup Starter</h1>
        <p>
          Integrate TakeShape CMS using a ready to go TakeShape starter project!
        </p>
        <a href="#">View starter on Github</a>
      </div>
    </main>
  );
}

export default Home;
