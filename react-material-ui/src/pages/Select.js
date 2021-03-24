import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  ListSubheader,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    withoutLabel: {
      marginTop: theme.spacing(2),
    },
    item: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  };
});

function SelectPage() {
  const classes = useStyles();

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <div className={classes.item}>
        <Typography variant="h6">1. Simple Select</Typography>

        <FormControl className={classes.formControl}>
          <InputLabel>Age</InputLabel>
          <Select value={age} onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Age</InputLabel>
          <Select value={age} onChange={handleChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Select
            className={classes.withoutLabel}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>without label</FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Age</InputLabel>
          <Select disabled value={age} onChange={handleChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>

        <FormControl error className={classes.formControl}>
          <InputLabel>Age</InputLabel>
          <Select value={age} onChange={handleChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Error</FormHelperText>
        </FormControl>

        <FormControl
          variant="filled"
          color="primary"
          className={classes.formControl}
        >
          <InputLabel>Age</InputLabel>
          <Select value={age} onChange={handleChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={classes.item}>
        <Typography variant="h6">2. Grouping Select</Typography>

        <FormControl className={classes.formControl}>
          <InputLabel>Grouping</InputLabel>
          <Select native defaultValue="">
            <option value="" />
            <optgroup label="Category 1">
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
            </optgroup>
            <optgroup label="Category 2">
              <option value={3}>Option 3</option>
              <option value={4}>Option 4</option>
            </optgroup>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Grouping</InputLabel>
          <Select defaultValue="">
            <MenuItem>
              <em value="">None</em>
            </MenuItem>

            <ListSubheader>Category 1</ListSubheader>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <ListSubheader>Category 2</ListSubheader>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
          </Select>
        </FormControl>
      </div>
    </React.Fragment>
  );
}

export default SelectPage;
