import { Box, Typography } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";

const InDepthSchool = () => {
  return (
    <>
      <div style={styles.line}>
        <Typography style={styles.bold}>B. Sc. Computer Science</Typography>
        <Typography>SEPT 2016 – JUNE 2022</Typography>
      </div>
      <div style={styles.line}>
        <Typography style={styles.bold}>Minor in Physics</Typography>
        <Typography>Victoria, BC, Canada</Typography>
      </div>
      <div style={styles.line}>
        <Typography style={styles.bold}>University of Victoria</Typography>
      </div>
      <br />
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
    </>
  );
};

const styles = {
  line: {
    display: "flex",
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: "bold",
  },
};

export default InDepthSchool;
