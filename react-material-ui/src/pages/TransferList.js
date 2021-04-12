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
    paper: {
      width: 200,
      height: 230,
      overflow: "auto",
    },
    button: {
      margin: theme.spacing(0.5, 0),
    },
  };
});

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function SimpleList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }

  const CustomList = (items) => {
    return (
      <Paper className={classes.paper}>
        <List dense component="div" role="list">
          {items.map((value) => {
            const labelId = `transfer-list-item-${value}-label`;

            return (
              <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
                <ListItemIcon>
                  <Checkbox
                     checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`List item ${value + 1}`} />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    );
  };

  function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  return (
    <div>
      <Typography variant="h6">1. Simple Transfer List</Typography>

      <Grid container justify="center" spacing={2} alignItems="center">
        <Grid item>{CustomList(left)}</Grid>

        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button className={classes.button} variant="outlined" onClick={handleAllRight} disabled={left.length === 0} size="small">
              ≫
            </Button>
            <Button className={classes.button} variant="outlined" onClick={handleCheckedRight} disabled={leftChecked.length === 0} size="small">
              &gt;
            </Button>
            <Button className={classes.button} variant="outlined" onClick={handleCheckedLeft} disabled={rightChecked.length === 0} size="small">
              &lt;
            </Button>
            <Button className={classes.button} variant="outlined" onClick={handleAllLeft} disabled={right.length === 0} size="small">
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
