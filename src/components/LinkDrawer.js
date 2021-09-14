import { Drawer } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import IconLink from "./IconLink";

const LinkDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      <IconLink label="LinkedIn" href="https://linkedin.com/in/rylan-cole">
        <LinkedInIcon />
      </IconLink>
      <IconLink label="GitHub" href="https://github.com/rylancole">
        <GitHubIcon />
      </IconLink>
      <p>Medium</p>
      <p>Source Code</p>
    </Drawer>
  );
};

export default LinkDrawer;
