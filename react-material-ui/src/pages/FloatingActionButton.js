import React from 'react';
import { Container, makeStyles, Typography, Fab, Box, AppBar, Tabs, Tab, useTheme, Zoom } from '@material-ui/core'
import { Add, Edit, Navigation, Favorite, KeyboardArrowUp } from '@material-ui/icons'
import { green } from '@material-ui/core/colors'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            marginTop: theme.spacing(1)
        },
        item: {
            '& > *': {
                margin: theme.spacing(1)
            }
        },
        extendedIcon: {
            marginRight: theme.spacing(1)
        },
        animation: {
            root: {
                backgroundColor: theme.palette.background.paper,
                width: 500,
                position: 'relative',
                minHeight: 200,
            },
            fab: {
                position: 'absolute',
                bottom: theme.spacing(2),
                right: theme.spacing(2),
            },
            fabGreen: {
                color: theme.palette.common.white,
                backgroundColor: green[500],
                '&:hover': {
                    backgroundColor: green[600],
                },
            }
        }
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value != index}
            id={`action-tabpanel-${index}`}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    )
}

TabPanel.propsType = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
}

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-contrls': `action-tabpanel-${index}`
    }
}

const FloatingActionButton = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: 'primary',
            className: classes.animation.fab,
            icon: <Add />,
            label: "Add"
        },
        {
            color: 'secondary',
            className: classes.animation.fab,
            icon: <Edit />,
            label: 'Edit',
        },
        {
            color: 'inherit',
            className: classes.animation.fab,
            icon: <KeyboardArrowUp />,
            label: 'Up',
        }
    ]

    return (
        <div>
            <Container className={classes.root}>
                <div className={classes.item}>
                    <Typography variant="h6">
                        1. Floating Action Button
                    </Typography>
                    <Fab color="primary">
                        <Add />
                    </Fab>
                    <Fab color="secondary">
                        <Edit />
                    </Fab>
                    <Fab variant="extended" color="primary">
                        <Navigation className={classes.extendedIcon} /> Navigate
                    </Fab>
                    <Fab disabled>
                        <Favorite />
                    </Fab>
                </div>

                <div className={classes.item}>
                    <Typography variant="h6">
                        2. Size
                    </Typography>
                    <div className={classes.item}>
                        <Fab color="secondary" size="large">
                            <Add />
                        </Fab>
                        <Fab color="secondary" size="medium">
                            <Add />
                        </Fab>
                        <Fab color="secondary" size="small">
                            <Add />
                        </Fab>
                    </div>

                    <div className={classes.item}>
                        <Fab variant="extended" color="primary">
                            <Navigation className={classes.extendedIcon} /> Navigate
                    </Fab>
                        <Fab variant="extended" color="primary" size="medium">
                            <Navigation className={classes.extendedIcon} /> Navigate
                    </Fab>
                        <Fab variant="extended" color="primary" size="small">
                            <Navigation className={classes.extendedIcon} /> Navigate
                    </Fab>
                    </div>


                </div>

                <div className={classes.item}>
                    <Typography variant="h6">
                        3. Animation
                    </Typography>

                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                            variant="fullWidth"
                        >
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0}>
                            Item One
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>

                        {
                            fabs.map((fab, index) => {
                                return (
                                    <Zoom
                                        key={fab.color}
                                        in={value === index}
                                        timeout={transitionDuration}
                                    >
                                        <Fab className={fab.className} color={fab.color}>
                                            {fab.icon}
                                        </Fab>
                                    </Zoom>
                                )
                            })
                        }

                    </SwipeableViews>

                </div>

            </Container>

        </div>
    );
};

export default FloatingActionButton;