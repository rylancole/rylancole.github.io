import "./App.css";
import { useState, useEffect } from "react";
import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Tooltip,
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
import EmailModal from "./components/EmailModal";
import TabBar from "./components/TabBar";
import Resume from "./components/Resume";
import { BIO, linkedinPicSrc, emailAddress } from "./descriptions";

const MAX_MOBILE_SCREEN_SIZE = 768;

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = () => width <= MAX_MOBILE_SCREEN_SIZE;
  const isDesktop = () => width > MAX_MOBILE_SCREEN_SIZE;

  const [headerIsVisible, setHeaderIsVisible] = useState(true);
  const [emailIsVisible, setEmailIsVisible] = useState(false);

  const [neuroModalIsOpen, setNeuroModalIsOpen] = useState(false);
  const [emailModalIsOpen, setEmailModalIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenDialog = () => {
    setNeuroModalIsOpen(true);
    setMenuIsOpen(false);
  };

  return (
    <>
      <header hidden={!headerIsVisible}>
        <AppBar style={styles.appBar} elevation={0}>
          <Toolbar style={styles.toolbar}>
            <NameTitle />
            <div
              style={{
                display: "flex",
                flexDirection: `${isMobile() ? "column-reverse" : "row"}`,
                alignItems: "center",
              }}
            >
              {emailIsVisible && (
                <Typography style={{ color: "black" }}>
                  {emailAddress}
                </Typography>
              )}
              {emailIsVisible && (
                <Tooltip title="Copy email address">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(emailAddress);
                    }}
                  >
                    <FileCopyIcon />
                  </IconButton>
                </Tooltip>
              )}
              {isDesktop() ? (
                <Tooltip title={`mailto:${emailAddress}`}>
                  <IconButton
                    onMouseOver={() => setEmailIsVisible(true)}
                    href={`mailto:${emailAddress}`}
                  >
                    {emailIsVisible ? <LaunchIcon /> : <MailIcon />}
                  </IconButton>
                </Tooltip>
              ) : (
                <IconButton onClick={() => setEmailModalIsOpen(true)}>
                  <MailIcon />
                </IconButton>
              )}
              <Tooltip title="More links">
                <IconButton onClick={() => setMenuIsOpen(!menuIsOpen)}>
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
        <LinkDrawer
          open={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
          openDialog={handleOpenDialog}
        />
        <div
          style={{ display: "flex", alignItems: "center", padding: "0px 16px" }}
        >
          {isDesktop() && (
            <Avatar
              alt="Rylan Cole"
              src={linkedinPicSrc}
              style={styles.avatar}
            />
          )}
          <span>
            <Typography>{BIO.intro}</Typography>
            <br />
            <Typography>{BIO.body}</Typography>
          </span>
        </div>
      </header>
      <body>
        {isDesktop() ? (
          <TabBar value={value} onChange={handleChange}>
            <IconButton onClick={() => setHeaderIsVisible(!headerIsVisible)}>
              <ChevronLeftIcon
                style={{
                  transform: `rotate(${headerIsVisible ? "" : "-"}90deg)`,
                }}
              />
            </IconButton>
          </TabBar>
        ) : (
          <Typography style={{ textAlign: "center", color: "grey" }}>
            View on desktop for more info
          </Typography>
        )}

        <Resume isDesktop={isDesktop()} value={value} />
        <NeuroModal
          open={neuroModalIsOpen}
          onClose={() => setNeuroModalIsOpen(false)}
        />
        <EmailModal
          open={emailModalIsOpen}
          onClose={() => setEmailModalIsOpen(false)}
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
