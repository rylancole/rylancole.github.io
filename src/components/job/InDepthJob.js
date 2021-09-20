import { Box, Typography } from "@material-ui/core";

const InDepthJob = ({ data }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "8px",
      }}
    >
      {data.map((text) => (
        <Typography style={{ padding: "8px" }}>{text}</Typography>
      ))}
    </Box>
  );
};

export default InDepthJob;
