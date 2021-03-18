import React from 'react';
import { AppBar, IconButton, Typography, MenuIcon, Toolbar, Button, Icon, makeStyles } from "@material-ui/core";
import { Menu } from '@material-ui/icons'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(1)
        },
        title: {
            flexGrow: 1
        }
    }
})

const AppBarComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <IconButton className={classes.menuButton} color="inherit" edge="start">
                        <Menu />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>REACT MATERIAL UI</Typography>

                    <Button color="inherit">Button Page</Button>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppBarComponent;