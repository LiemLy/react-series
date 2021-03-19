import React from 'react';
import { Button, IconButton, Typography, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { PhotoCamera, Delete, Send } from '@material-ui/icons';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            margin: theme.spacing(1),
            '& > *': {
                margin: theme.spacing(1)
            }
        }
    }
})

const Home = () => {
    const classes = useStyles();

    return (
        <Container>

            <Typography className={classes.root} variant="h6">1.Contained Buttons</Typography>

            <div className={classes.root}>
                <Button variant="contained">Default</Button>

                <Button variant="contained" color='primary'>Primary</Button>

                <Button variant="contained" color="secondary">Secondary</Button>

                <Button variant="contained" disabled>Diabled</Button>

                <Button variant="contained" color="primary" href="/#test">Link</Button>

                <Button variant="contained" color="primary" disableElevation>Disable elevation</Button>
            </div>

            <Typography className={classes.root} variant="h6">2.Text Buttons</Typography>

            <div className={classes.root}>
                <Button>Default</Button>

                <Button color='primary'>Primary</Button>

                <Button color="secondary">Secondary</Button>

                <Button disabled>Diabled</Button>

                <Button color="primary" href="/#test">Link</Button>

                <Button color="primary" disableElevation>Disable elevation</Button>
            </div>

            <Typography className={classes.root} variant="h6">3.Outlined Buttons</Typography>

            <div className={classes.root}>
                <Button variant="outlined">Default</Button>

                <Button variant="outlined" color='primary'>Primary</Button>

                <Button variant="outlined" color="secondary">Secondary</Button>

                <Button variant="outlined" disabled>Diabled</Button>

                <Button variant="outlined" color="primary" href="/#test">Link</Button>

                <Button variant="outlined" color="primary" disableElevation>Disable elevation</Button>
            </div>

            <Typography className={classes.root} variant="h6">4.Upload Buttons</Typography>

            <div className={classes.root}>
                <input style={{ display: 'none' }} type="file" id="contained-button-file" />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">Upload</Button>
                </label>

                <label htmlFor="contained-button-file">
                    <Button variant="outlined" color="primary" component="span"><PhotoCamera /></Button>
                </label>

                <label htmlFor="contained-button-file">
                    <IconButton color="secondary" aria-label="upload picture" component="span"><PhotoCamera /></IconButton>
                </label>
            </div>

            <Typography className={classes.root} variant="h6">5.Size Buttons</Typography>

            <div>

                <div className={classes.root}>
                    <Button variant="text">small</Button>
                    <Button variant="text" size="medium">medium</Button>
                    <Button variant="text" size="large">large</Button>
                </div>

                <div className={classes.root}>
                    <Button variant="outlined" color="primary">small</Button>
                    <Button variant="outlined" color="primary" size="medium">medium</Button>
                    <Button variant="outlined" color="primary" size="large">large</Button>
                </div>

                <div className={classes.root}>
                    <Button variant="contained" color="primary">small</Button>
                    <Button variant="contained" color="primary" size="medium">medium</Button>
                    <Button variant="contained" color="primary" size="large">large</Button>
                </div>

                <div className={classes.root}>
                    <IconButton size="small"><PhotoCamera fontSize="inherit" /></IconButton>
                    <IconButton><PhotoCamera fontSize="small" /></IconButton>
                    <IconButton><PhotoCamera /></IconButton>
                    <IconButton><PhotoCamera fontSize="large" /></IconButton>
                </div>

            </div>

            <Typography className={classes.root} variant="h6">6.Buttons with Icons and Labels</Typography>

            <div className={classes.root}>
                <Button variant="contained" startIcon={<Delete></Delete>} color="secondary">
                    delete
                </Button>

                <Button variant="contained" endIcon={<Send></Send>} color="primary">
                    send
                </Button>

                <Button variant="contained" startIcon={<PhotoCamera></PhotoCamera>}>
                    Upload
                </Button>
            </div>

        </Container>

    )
}

export default Home;