import {
  Drawer,
  IconButton,
  Typography,
  ImageList,
  ImageListItem,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import CodeIcon from "@material-ui/icons/Code";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

import IconLink from "./IconLink";

const links = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rylan-cole",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/rylancole",
    icon: <GitHubIcon />,
  },
  {
    label: "Medium",
    href: "https://medium.com/@rylancole",
    icon: <DescriptionIcon />,
  },
  {
    label: "Source Code",
    href: "https://github.com/rylancole/rylancole.github.io",
    icon: <CodeIcon />,
  },
];

const LinkDrawer = ({ open, onClose, openDialog }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <ImageList cols={2} rowHeight="auto">
        {links.map((link) => {
          return (
            <ImageListItem key={link.label}>
              <IconLink {...link}>{link.icon}</IconLink>
            </ImageListItem>
          );
        })}
      </ImageList>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton onClick={openDialog}>
          <AllInclusiveIcon />
        </IconButton>
        <Typography variant="subtitle1">Neurodiversity</Typography>
      </div>
    </Drawer>
  );
};

export default LinkDrawer;
