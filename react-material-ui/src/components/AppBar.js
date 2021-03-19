import React from 'react';
import { AppBar, IconButton, Typography, MenuIcon, Toolbar, Button, Icon, makeStyles } from "@material-ui/core";
import { Menu, Home } from '@material-ui/icons'
import { Link } from 'react-router-dom'

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

                    <div className={classes.title}>
                        <Button component={Link} to={'/'} color="inherit">REACT MATERIAL UI</Button>
                    </div>

                    {/* <Typography component={Link} to={'/'} variant="h6" className={classes.title}> <Home></Home>REACT MATERIAL UI</Typography> */}

                    <Button component={Link} color="inherit" to={'/button'}>Button</Button>
                    <Button component={Link} color="inherit" to={'/button-group'}>Button Group</Button>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppBarComponent;