import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Slider,
  Divider,
} from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "50vw",
    },
    item: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  };
});

function SliderPage() {
  const classes = useStyles();

  const marks = [
      {
          value: 0,
          label: '0°C'
      },
      {
          value: 20,
          label: '20°C'
      },
      {
          value: 37,
          label: '37°C'
      },
      {
          value: 100,
          label: '100°C'
      }
  ]

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography variant="h6">1. Continuous sliders</Typography>

        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>

        <Typography gutterBottom>Disabled Slider</Typography>

        <Slider />
      </div>

      <div className={classes.root}>
        <Typography variant="h6">2. Discrete sliders</Typography>
        <Typography>Temperature</Typography>

        <Slider
          defaultValue={30}
          min={10}
          marks
          valueLabelDisplay="auto"
          step={10}
          max={110}
        />
      </div>

      <div className={classes.root}>
        <Typography variant="h6">3. Custom marks</Typography>
        <Typography>Temperature</Typography>

        <Slider
          defaultValue={30}
          marks={marks}
          valueLabelDisplay="auto"
          step={10}
        />
      </div>
    </React.Fragment>
  );
}

export default SliderPage;
