import React from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  MenuIcon,
} from "@material-ui/core";
import { Inbox as InboxIcon, Mail as MailIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

function SideBar({ classes }) {
  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem component={Link} to={"/"} button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>

          <ListItem component={Link} to={"/button"} button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Button"} />
          </ListItem>

          <ListItem component={Link} to={"/checkbox"} button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Checkbox"} />
          </ListItem>

          <ListItem component={Link} to={"/button-group"} button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Button Group"} />
          </ListItem>

          <ListItem component={Link} to={"/floating-action-button"} button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Floating Action Button"} />
          </ListItem>

          <ListItem component={Link} to={"/date-time"} button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Datetime"} />
          </ListItem>

        </List>
        <Divider />
      </Drawer>
    </React.Fragment>
  );
}

export default SideBar;
