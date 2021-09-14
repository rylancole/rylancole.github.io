import "./IconLink.css";
import { IconButton, Tooltip } from "@material-ui/core";

const IconLink = ({ label, href, children }) => {
  return (
    <Tooltip title={`Open Rylan's ${label}`}>
      <IconButton href={href} aria-label={label}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default IconLink;
