import { Box, Typography } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";

const InDepthJob = ({ data }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <BuildIcon />
      <Typography>Under Construction</Typography>
    </Box>
  );
};

export default InDepthJob;
