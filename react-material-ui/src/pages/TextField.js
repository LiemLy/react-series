import React from "react";
import {
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import NumberFormat from "react-number-format";
import MaskedInput from "react-text-mask";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import PropTypes from "prop-types";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => {
  return {
    root: { display: "flex", flexWrap: "wrap" },
    item: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    inItem: {
      "& > *": {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
  };
});

function TextFieldPage() {
  const theme = useTheme();
  const classes = useStyles();
  const [error, setError] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const onChangeError = (event) => {
    if (event.target.value) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleClickShowPassword = () => {
    console.log("handleClickShowPassword");
    let bool = !showPassword;
    setShowPassword(bool);
  };

  const handleMouseDownPassword = (event) => {
    console.log("handleMouseDownPassword");
    event.preventDefault();
  };

  return (
    <div>
      <div className={classes.item}>
        <Typography variant="h6">1. Basic TextField</Typography>

        <TextField label="Standard" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Outlined" variant="outlined" />
      </div>

      <div className={classes.item}>
        <Typography variant="h6">2. Form Props</Typography>
        <div className={classes.inItem}>
          <TextField required label="Required" defaultValue="Hello World" />
          <TextField disabled label="Disabled" />
          <TextField type="password" label="Password" />
          <TextField
            label="Read Only"
            defaultValue="Read Only"
            InputProps={{ readOnly: true }}
          />
          <TextField
            type="number"
            label="Number"
            InputLabelProps={{ shrink: true }}
          />
          <TextField label="Search Field" type="search" />

          <TextField
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>

        <div className={classes.inItem}>
          <TextField
            variant="filled"
            required
            label="Required"
            defaultValue="Hello World"
          />
          <TextField variant="filled" disabled label="Disabled" />
          <TextField variant="filled" type="password" label="Password" />
          <TextField
            variant="filled"
            label="Read Only"
            defaultValue="Read Only"
            InputProps={{ readOnly: true }}
          />
          <TextField
            variant="filled"
            type="number"
            label="Number"
            InputLabelProps={{ shrink: true }}
          />
          <TextField variant="filled" label="Search Field" type="search" />

          <TextField
            variant="filled"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>

        <div className={classes.inItem}>
          <TextField
            variant="outlined"
            required
            label="Required"
            defaultValue="Hello World"
          />
          <TextField variant="outlined" disabled label="Disabled" />
          <TextField variant="outlined" type="password" label="Password" />
          <TextField
            variant="outlined"
            label="Read Only"
            defaultValue="Read Only"
            InputProps={{ readOnly: true }}
          />
          <TextField
            variant="outlined"
            type="number"
            label="Number"
            InputLabelProps={{ shrink: true }}
          />
          <TextField variant="outlined" label="Search Field" type="search" />

          <TextField
            variant="outlined"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>

        <div className={classes.item}>
          <Typography variant="h6">3. Validation</Typography>

          <TextField
            error={error}
            label="Check Error"
            onChange={onChangeError}
            defaultValue="Default Value"
            variant="outlined"
            helperText={error ? "Required Value" : ""}
          />
        </div>

        <div className={classes.item}>
          <Typography variant="h6">4. TextField with Icons</Typography>

          <TextField
            label="TextField with Icon"
            defaultValue="Default Value"
            variant="outlined"
            className={classes.margin}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="TextField with Icon"
            defaultValue="Default Value"
            className={classes.margin}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className={classes.item}>
          <Typography variant="h6">5. Input Adornment</Typography>

          <TextField
            label="With normal TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />

          <TextField
            style={{ marginTop: theme.spacing(3) }}
            helperText="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Amount"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            label="With normal TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            helperText="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
          />

          <TextField
            variant="outlined"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            label="Amount"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />

          <div className={classes.item}>
            <Typography variant="h6">6. Size</Typography>

            <div className={classes.inItem}>
              <TextField
                style={{ marginTop: theme.spacing(2) }}
                label="Standard"
              />
              <TextField label="Filled" variant="filled" />
              <TextField label="Outlined" variant="outlined" />
            </div>

            <div className={classes.inItem}>
              <TextField
                size="small"
                style={{ marginTop: theme.spacing(1) }}
                label="Standard"
              />
              <TextField size="small" label="Filled" variant="filled" />
              <TextField size="small" label="Outlined" variant="outlined" />
            </div>
          </div>

          <div className={classes.item}>
            <Typography variant="h6">7. Layout</Typography>

            <div className={classes.inItem}>
              <TextField
                InputLabelProps={{ shrink: true }}
                fullWidth
                label="Outlined"
                variant="outlined"
                helperText="Fullwidth"
              />
              <TextField variant="outlined" label="None" />
              <TextField variant="outlined" margin="dense" label="Dense" />
              <TextField variant="outlined" margin="normal" label="Normal" />
            </div>
          </div>

          <div className={classes.item}>
            <Typography variant="h6">
              8. Integration with 3rd party input libraries
            </Typography>

            <div className={classes.inItem}>
              <TextField
                InputLabelProps={{ shrink: true }}
                fullWidth
                defaultValue="1000"
                label="react-number-format"
                variant="outlined"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />

              <TextField
                label="react-text-mask"
                fullWidth
                defaultValue="84"
                variant="outlined"
                InputProps={{
                  inputComponent: TextMaskCustom,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextFieldPage;
