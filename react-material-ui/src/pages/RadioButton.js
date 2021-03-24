import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  RadioGroup,
  Typography,
  Radio,
  withStyles,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    item: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  };
});

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => {
  return <Radio color="default" {...props} />;
});

function RadioButtonPage() {
  const classes = useStyles();
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [checked, setChecked] = useState("a");

  const handleChangeChecked = (event) => {
    setChecked(event.target.value);
  };

  return (
    <React.Fragment>
      <div className={classes.item}>
        <Typography variant="h6">1. Basic RadioButton</Typography>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel
              control={<Radio />}
              value="female"
              label="Female"
            />
            <FormControlLabel control={<Radio />} value="male" label="Male" />
            <FormControlLabel control={<Radio />} value="other" label="Other" />
            <FormControlLabel
              control={<Radio />}
              value="disabled"
              disabled
              label="(Disabled Option)"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className={classes.item}>
        <Typography variant="h6">2. Standalone radio buttons</Typography>
        <Radio
          value="a"
          checked={checked === "a"}
          onChange={handleChangeChecked}
          name="radio-button-demo"
        />
        <Radio
          value="b"
          color="primary"
          checked={checked === "b"}
          onChange={handleChangeChecked}
          name="radio-button-demo"
        />
        <Radio
          value="c"
          color="default"
          checked={checked === "c"}
          onChange={handleChangeChecked}
          name="radio-button-demo"
        />
        <GreenRadio
          value="d"
          checked={checked === "d"}
          onChange={handleChangeChecked}
        />
      </div>

      <div className={classes.item}>
        <Typography variant="h6">3. Label placement</Typography>
        <FormLabel>Label Placement</FormLabel>
        <FormControlLabel
          control={<Radio />}
          labelPlacement="top"
          label="Top"
        />
        <FormControlLabel
          control={<Radio />}
          labelPlacement="start"
          label="Start"
        />
        <FormControlLabel
          control={<Radio />}
          labelPlacement="bottom"
          label="Bottom"
        />
        <FormControlLabel
          control={<Radio />}
          labelPlacement="end"
          label="End"
        />
      </div>
    </React.Fragment>
  );
}

export default RadioButtonPage;
