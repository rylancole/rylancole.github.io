import { IconButton, Tooltip, Typography } from "@material-ui/core";

const IconLink = ({ label, href, icon }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Tooltip title={`Open Rylan's ${label}`}>
        <IconButton href={href} aria-label={label}>
          {icon}
        </IconButton>
      </Tooltip>
      <Typography variant="subtitle1">{label}</Typography>
    </div>
  );
};

export default IconLink;
