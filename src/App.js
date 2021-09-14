import "./App.css";
import { useState } from "react";
import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import LaunchIcon from "@material-ui/icons/Launch";

import LinkDrawer from "./components/LinkDrawer";
import NameTitle from "./components/NameTitle";
import NeuroModal from "./components/NeuroModal";
import TabBar from "./components/TabBar";
import Resume from "./components/Resume";
import { BIO, linkedinPicSrc } from "./descriptions";

const emailAddress = "rylan.employment@gmail.com";

const App = () => {
  const [headerIsVisible, setHeaderIsVisible] = useState(true);
  const [emailIsVisible, setEmailIsVisible] = useState(false);

  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenDialog = () => {
    setDialogIsOpen(true);
    setMenuIsOpen(false);
  };

  return (
    <>
      <header hidden={!headerIsVisible}>
        <AppBar style={styles.appBar} elevation={0}>
          <Toolbar style={styles.toolbar}>
            <NameTitle />
            <div style={{ display: "flex", alignItems: "center" }}>
              {emailIsVisible && (
                <Typography style={{ color: "black" }}>
                  {emailAddress}
                </Typography>
              )}
              {emailIsVisible && (
                <IconButton
                  onClick={() => {
                    navigator.clipboard.writeText(emailAddress);
                  }}
                >
                  <FileCopyIcon />
                </IconButton>
              )}
              <IconButton
                onMouseOver={() => setEmailIsVisible(true)}
                href={`mailto:${emailAddress}`}
              >
                {emailIsVisible ? <LaunchIcon /> : <MailIcon />}
              </IconButton>
              <IconButton onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <LinkDrawer
          open={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
          openDialog={handleOpenDialog}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar alt="Rylan Cole" src={linkedinPicSrc} style={styles.avatar} />
          <span>
            <Typography>{BIO.intro}</Typography>
            <br />
            <Typography>{BIO.body}</Typography>
          </span>
        </div>
      </header>
      <body>
        <TabBar value={value} onChange={handleChange}>
          <IconButton onClick={() => setHeaderIsVisible(!headerIsVisible)}>
            <ChevronLeftIcon
              style={{
                transform: `rotate(${headerIsVisible ? "-" : ""}90deg)`,
              }}
            />
          </IconButton>
        </TabBar>
        <Resume value={value} />
        <NeuroModal
          open={dialogIsOpen}
          onClose={() => setDialogIsOpen(false)}
        />
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
