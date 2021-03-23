import React from "react";
import { Container, Typography, ButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: theme.spacing(1),
    },
    item: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  };
});
const ButtonGroupPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.item}>
        <Typography variant="h6">1. Basic Button Group</Typography>

        <ButtonGroup color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <ButtonGroup variant="contained" color="secondary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <ButtonGroup variant="text" color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div className={classes.item}>
        <Typography variant="h6">2. Size and Colors</Typography>

        <ButtonGroup size="small">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <ButtonGroup color="secondary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <ButtonGroup size="large" color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>

      <div className={classes.item}>
        <Typography variant="h6">3. Vertical Group</Typography>

        <ButtonGroup orientation="vertical" size="small">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <ButtonGroup orientation="vertical" color="secondary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <ButtonGroup orientation="vertical" size="large" color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>

      <div className={classes.item}>
        <Typography variant="h6">4. Disable Elevation</Typography>

        <Typography>Has Elevation</Typography>
        <ButtonGroup variant="contained" size="large" color="primary">
          <Button>One</Button>
          <Button>Two</Button>
        </ButtonGroup>

        <Typography>Disable Elevation</Typography>
        <ButtonGroup
          variant="contained"
          size="large"
          color="primary"
          disableElevation
        >
          <Button>One</Button>
          <Button>Two</Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};

export default ButtonGroupPage;
