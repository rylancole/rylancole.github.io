import "./App.css";
import { useState } from "react";
import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

import AppsIcon from "@material-ui/icons/Apps";
import MailIcon from "@material-ui/icons/Mail";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import LinkDrawer from "./components/LinkDrawer";
import NameTitle from "./components/NameTitle";
import TabBar from "./components/TabBar";
import Resume from "./components/Resume";
import { BIO, linkedinPicSrc } from "./descriptions";

const App = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <header hidden={hideHeader}>
        <AppBar style={styles.appBar} elevation={0}>
          <Toolbar style={styles.toolbar}>
            <NameTitle />
            <div>
              <IconButton>
                <MailIcon />
              </IconButton>
              <IconButton onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <AppsIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <LinkDrawer open={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar alt="Rylan Cole" src={linkedinPicSrc} style={styles.avatar} />
          <Typography>{BIO}</Typography>
        </div>
      </header>
      <body>
        <TabBar value={value} onChange={handleChange}>
          <IconButton onClick={() => setHideHeader(!hideHeader)}>
            <ChevronLeftIcon
              style={{ transform: `rotate(${hideHeader ? "-" : ""}90deg)` }}
            />
          </IconButton>
        </TabBar>
        <Resume value={value} />
      </body>
    </>
  );
};

const styles = {
  appBar: {
    backgroundColor: "white",
    position: "sticky",
  },
  avatar: {
    minWidth: "15vw",
    minHeight: "15vw",
    margin: "16px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default App;
