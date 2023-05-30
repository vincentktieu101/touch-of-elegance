import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import GradeIcon from "@mui/icons-material/Grade";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function Header() {
  const [state, setState] = useState();

  const list = (
    <div
      role="presentation"
      onClick={() => setState(false)}
      onKeyDown={() => setState(false)}
    >
      <List>
        <a href="#cover">
          <ListItem key={"Home"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              <h4>HOME</h4>
            </ListItemText>
          </ListItem>
        </a>
        <a href="#about">
          <ListItem key={"About"}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText>
              <h4>ABOUT</h4>
            </ListItemText>
          </ListItem>
        </a>
        <a href="#services">
          <ListItem key={"Photos"}>
            <ListItemIcon>
              <PhotoLibraryIcon />
            </ListItemIcon>
            <ListItemText>
              <h4>PHOTOS</h4>
            </ListItemText>
          </ListItem>
        </a>
        <a href="#services">
          <ListItem key={"Services"}>
            <ListItemIcon>
              <RoomServiceIcon />
            </ListItemIcon>
            <ListItemText>
              <h4>SERVICES</h4>
            </ListItemText>
          </ListItem>
        </a>
        <a href="#reviews">
          <ListItem key={"Reviews"}>
            <ListItemIcon>
              <GradeIcon />
            </ListItemIcon>
            <ListItemText>
              <h4>REVIEWS</h4>
            </ListItemText>
          </ListItem>
        </a>
        <Divider />
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setState(true)}
          >
            <MenuIcon className="main-color" />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state}
            onClose={() => setState(false)}
            className="drawer"
          >
            {list}
          </Drawer>
          <Typography component="span" variant="h6">
            <a
              href="#cover"
              className="main-color"
              style={{ textDecoration: "none" }}
            >
              <h4>TOUCH OF ELEGANCE</h4>
            </a>
          </Typography>
          <a
            href="https://www.google.com/maps/place/Touch+of+Elegance+nails+%26+Spa/@34.048895,-118.4363709,18.32z/data=!4m5!3m4!1s0x80c2bb9cebfea351:0x60ab60d5b27c00de!8m2!3d34.0489753!4d-118.4356852"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            className="main-color"
          >
            <DirectionsIcon />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
