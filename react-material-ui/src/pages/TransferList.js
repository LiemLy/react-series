import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Button,
  Paper,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Checkbox,
} from "@material-ui/core";

function TransferListPage() {
  return (
    <div>
      <SimpleList />
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: "auto",
    },
    button: {
      margin: theme.spacing(0.5, 0),
    },
  };
});

function SimpleList() {
  const classes = useStyles();
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const CustomList = (items) => {
    return (
      <Paper>
        <List>
          {items.map((value) => {
            return (
              <ListItem key={value}>
                <ListItemIcon>
                  <Checkbox />
                </ListItemIcon>
                <ListItemText primary={`List item ${value + 1}`} />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    );
  };

  return (
    <div>
      <Typography variant="h6">1. Simple Transfer List</Typography>

      <Grid container justify="center" spacing={2} alignItems="center">
        <Grid item>{CustomList(left)}</Grid>

        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button className={classes.button} variant="outlined" size="small">
              ≫
            </Button>
            <Button className={classes.button} variant="outlined" size="small">
              &gt;
            </Button>
            <Button className={classes.button} variant="outlined" size="small">
              &lt;
            </Button>
            <Button className={classes.button} variant="outlined" size="small">
              ≪
            </Button>
          </Grid>
        </Grid>

        <Grid item>{CustomList(right)}</Grid>
      </Grid>
    </div>
  );
}

export default TransferListPage;
