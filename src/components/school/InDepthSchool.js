import { Box, Typography } from "@material-ui/core";

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
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px 8px 8px 8px",
        }}
      >
        <Typography style={{ padding: "0px 8px 8px 8px" }}>
          In 2016 I came to UVic to start a Physics degeree. Computer Science
          was required, but I had no idea what it was. Over the next few years I
          quickly transition from a CSC minor, to a combined-major, to now a CSC
          Major and Physics minor. My first co-op (while still Physics major)
          was a programming job, and I realized the interest-to-difficulty ratio
          in CSC worked much better for me!
        </Typography>
        <Typography style={{ padding: "8px" }}>
          Physics worked great for playing to the strengths of how my brain
          worked, very mathimatecally-focus and patter-driven. When things
          started to go quantum I realized CSC might be a better fit. In my
          final semester I am focused on security and application-vs-theory
          courses, ranging from network protocols to data science.
        </Typography>
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
