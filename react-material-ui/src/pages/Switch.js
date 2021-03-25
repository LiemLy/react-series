import React, { useState } from "react";
import {
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

// import Typography from '@material-ui/core/Typography'
// import Switch from '@material-ui/core/Switch'
// import FormGroup from '@material-ui/core/FormGroup'
// import FormControlLabel from '@material-ui/core/FormControlLabel'

function SwitchPage() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <div>
        <Typography variant="h6">1. Basic Switch</Typography>

        <Switch
          name="checkedA"
          onChange={handleChange}
          value={state.checkedA}
        />
        <Switch
          name="checkedB"
          onChange={handleChange}
          value={state.checkedB}
          color="primary"
        />
        <Switch color="default" />
        <Switch color="default" disabled />
      </div>

      <div>
        <Typography variant="h6">2. Switch with FormControlLabel</Typography>

        <FormGroup row>
          <FormControlLabel
            label="Secondary Switch"
            control={<Switch />}
          ></FormControlLabel>

          <FormControlLabel
            label="Primary Switch"
            control={<Switch color="primary" />}
          ></FormControlLabel>

          <FormControlLabel
            label="Disabled Switch"
            control={<Switch disabled />}
          ></FormControlLabel>

          <FormControlLabel
            label="Small Switch"
            control={<Switch size="small" />}
          ></FormControlLabel>
        </FormGroup>
      </div>

      <div>
        <Typography variant="h6">3. Label placement</Typography>

        <FormGroup row>
          <FormControlLabel
            label="Top"
            labelPlacement="top"
            control={<Switch />}
          ></FormControlLabel>
            <FormControlLabel
            label="Start"
            labelPlacement="start"
            control={<Switch />}
          ></FormControlLabel>
            <FormControlLabel
            label="Bottom"
            labelPlacement="bottom"
            control={<Switch />}
          ></FormControlLabel>
            <FormControlLabel
            label="End"
            labelPlacement="end"
            control={<Switch />}
          ></FormControlLabel>
          
        </FormGroup>
      </div>
    </React.Fragment>
  );
}

export default SwitchPage;
