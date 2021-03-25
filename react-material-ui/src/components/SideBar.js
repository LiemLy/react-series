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
import { Inbox as InboxIcon, Mail as MailIcon, Send } from "@material-ui/icons";
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
              <Send />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>

          <ListItem component={Link} to={"/button"} button>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary={"Button"} />
          </ListItem>

          <ListItem component={Link} to={"/checkbox"} button>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary={"Checkbox"} />
          </ListItem>

          <ListItem component={Link} to={"/button-group"} button>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary={"Button Group"} />
          </ListItem>

          <ListItem component={Link} to={"/floating-action-button"} button>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary={"Floating Action Button"} />
          </ListItem>

          <ListItem component={Link} to={"/date-time"} button>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary={"Datetime"} />
          </ListItem>

          <ListItem component={Link} to={"/radio-button"} button>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary={"Radio Button"} />
          </ListItem>

          <ListItem component={Link} to={"/select"} button>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary={"Select"} />
          </ListItem>

          <ListItem component={Link} to={"/slider"} button>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary={"Slider"} />
          </ListItem>

          <ListItem component={Link} to={"/switch"} button>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary={"Switch"} />
          </ListItem>

        </List>
        <Divider />
      </Drawer>
    </React.Fragment>
  );
}

export default SideBar;
