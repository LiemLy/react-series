import React from 'react';
import { makeStyles, withStyles, Container, Typography, Checkbox, FormGroup, FormControl, FormControlLabel, FormLabel, FormHelperText } from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import { FavoriteBorderSharp, FavoriteSharp } from '@material-ui/icons'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            marginTop: theme.spacing(1)
        },
        item: {
            '& > *': {
                margin: theme.spacing(1)
            }
        }
    }
})

const CustomCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600]
        }
    },
    checked: {}
})((props) => { return <Checkbox color="default" {...props}></Checkbox> })

const CheckboxPage = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }

    const { gilad, jason, antoine } = state;

    const error = [gilad, jason, antoine].filter(v => v).length != 2;

    return (
        <Container className={classes.root}>
            <div className={classes.item}>
                <Typography variant="h6">1. Basic Checkboxes</Typography>

                <Checkbox defaultChecked color="default" />
                <Checkbox defaultChecked color="primary" />
                <Checkbox defaultChecked color="secondary" />
                <Checkbox defaultChecked disabled color="secondary" />
                <Checkbox defaultChecked indeterminate color="secondary" />
                <Checkbox defaultChecked size="small" color="secondary" />
            </div>

            <div className={classes.item}>
                <Typography variant="h6">2. Checkboxes with FormControlLabel</Typography>

                <FormGroup row>
                    <FormControlLabel label="Secondary" control={<Checkbox defaultChecked color="secondary" />} />
                    <FormControlLabel label="Primary" control={<Checkbox defaultChecked color="primary" />} />
                    <FormControlLabel control={<Checkbox defaultChecked color="default" />} label="Default" />
                    <FormControlLabel control={<Checkbox disabled color="default" />} label="Disabled" />
                    <FormControlLabel control={<Checkbox defaultChecked disabled color="default" />} label="Disabled" />
                    <FormControlLabel control={<Checkbox defaultChecked indeterminate color="primary" />} label="Indeterminate" />
                    <FormControlLabel label="Custom" control={<CustomCheckbox />} />
                    <FormControlLabel label="Custom icon" control={<Checkbox icon={<FavoriteBorderSharp />} checkedIcon={<FavoriteSharp />} defaultChecked color="secondary" />} />
                    <FormControlLabel label="Custom size" control={<Checkbox icon={<FavoriteBorderSharp />} checkedIcon={<FavoriteSharp />} size="small" defaultChecked color="secondary" />} />
                </FormGroup>

            </div>

            <div className={classes.item}>
                <Typography variant="h6">3. Checkboxes with FormGroup</Typography>

                <FormControl component="fieldset">
                    <FormLabel component="legend">Assign responsibility</FormLabel>

                    <FormGroup>
                        <FormControlLabel checked={gilad} label="Gilad Gray" name="gilad" onChange={handleChange} control={<Checkbox />} ></FormControlLabel>
                        <FormControlLabel checked={jason} label="Jason Killian" name="jason" onChange={handleChange} control={<Checkbox />} ></FormControlLabel>
                        <FormControlLabel checked={antoine} label="Antoine Llorca" name="antoine" onChange={handleChange} control={<Checkbox />} ></FormControlLabel>
                    </FormGroup>

                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>

                <FormControl error={error} required component="fieldset" >
                    <FormLabel component="legend">Pick two</FormLabel>

                    <FormGroup>
                        <FormControlLabel checked={gilad} name="gilad" label="Gilad Gray" onChange={handleChange} control={<Checkbox />} ></FormControlLabel>
                        <FormControlLabel checked={jason} name="jason" label="Jason Killian" onChange={handleChange} control={<Checkbox />} ></FormControlLabel>
                        <FormControlLabel checked={antoine} name="antoine" label="Antoine Llorca" onChange={handleChange} control={<Checkbox />} ></FormControlLabel>
                    </FormGroup>

                    <FormHelperText>You can display an error</FormHelperText>
                </FormControl>
            </div>

            <div className={classes.item}>
                <Typography variant="h6">3. Label Replacement</Typography>

                <FormGroup row>
                <FormControlLabel value="top" control={<Checkbox color="primary" />} label="Top" labelPlacement="top" />
                <FormControlLabel value="bottom" control={<Checkbox color="primary" />} label="Bottom" labelPlacement="bottom" />
                <FormControlLabel value="start" control={<Checkbox color="primary" />} label="Start" labelPlacement="start" />
                <FormControlLabel value="end" control={<Checkbox color="primary" />} label="End" labelPlacement="end" />
                </FormGroup>

            </div>


        </Container>
    );
};

export default CheckboxPage;