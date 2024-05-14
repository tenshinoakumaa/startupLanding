import telegram from "../assets/telegram.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import { useState, useEffect } from "react";
import * as React from "react";
import X from "../assets/X.svg";
import burger from "../assets/burgetIcon.svg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Modal from "react-modal";
import { styled } from "styled-components";

type Anchor = "top" | "left" | "bottom" | "right";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    // left: false,
    // bottom: false,
    // right: false,
  });

  React.useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => {
    return (
      <Box
        className="px-16 bg-black text-white"
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem key={"main"} disablePadding>
            <div className="flex justify-between items-center w-full px-4 py-4">
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "450",
                  lineHeight: "36.13px",
                }}
              >
                <span>Innovate</span>
                <span className="text-blue-500">Hub</span>
              </div>
              <div>
                {" "}
                <img src={X} alt="" />
              </div>
            </div>
          </ListItem>

          <ListItem key={"О нас"} disablePadding>
            <ListItemButton>
              <ListItemText primary={"О нас"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"Почему мы"} disablePadding>
            <a href="#why">
              <ListItemButton>
                <ListItemText primary={"Почему мы"} />
              </ListItemButton>
            </a>
          </ListItem>

          <ListItem key={"Наши услуги"} disablePadding>
            <a href="#services">
              <ListItemButton>
                <ListItemText primary={"Наши услуги"} />
              </ListItemButton>
            </a>
          </ListItem>

          <ListItem key={"Отзывы"} disablePadding>
            <a href="#reviews">
              <ListItemButton>
                <ListItemText primary={"Отзывы"} />
              </ListItemButton>
            </a>
          </ListItem>

          <ListItem key={"Отзывы"} disablePadding>
            <div className="pt-12">
              <a href="#footer">
                <ListItemButton>
                  <ListItemText primary={"Контакты"} />
                </ListItemButton>
                <div className="px-4" style={{ color: "#FFFFFF94" }}>
                  Телефон: +123456789 <br />
                  Email: info@innovatehub.com
                </div>
                <div className="flex space-x-8 px-4 py-8">
                  <img src={telegram} alt="" />
                  <img src={instagram} alt="" />
                  <img src={linkedin} alt="" />
                </div>
              </a>
            </div>
          </ListItem>
        </List>
        <Divider />
      </Box>
    );
  };

  return (
    <div>
      <React.Fragment key={"burgerIcon"}>
        <Button onClick={toggleDrawer("top", true)}>
          <img src={burger} alt="" />
        </Button>
        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
