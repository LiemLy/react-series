import 'date-fns'
import React from 'react';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core'
import { KeyboardTimePicker, KeyboardDatePicker, KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

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

const DateTime = () => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <Container className={classes.root}>
                <div className={classes.item}>
                    <Typography variant="h6">1. Basic Checkboxes</Typography>

                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />

                        <KeyboardDatePicker
                            format="dd/MM/yyyy"
                            margin="normal"
                            label="Date picker dialog"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />

                        <KeyboardTimePicker
                            format="hh:mm:ss"
                            margin="normal"
                            label="Time picker dialog"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />

                        <KeyboardDateTimePicker
                            format="dd/MM/yyyy"
                            margin="normal"
                            label="Datetime picker dialog"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />

                    </Grid>

                </div>
            </Container>
        </MuiPickersUtilsProvider>

    );
};

export default DateTime;