import { Typography } from "@material-ui/core";

const StandardSchool = ({ isDesktop }) => {
  return (
    <>
      <div style={styles.line}>
        <Typography style={styles.bold}>B. Sc. Computer Science</Typography>
        {isDesktop && <Typography>SEPT 2016 – JUNE 2022</Typography>}
      </div>
      <div style={styles.line}>
        <Typography style={styles.bold}>Minor in Physics</Typography>
        {isDesktop && <Typography>Victoria, BC, Canada</Typography>}
      </div>
      <div style={styles.line}>
        <Typography style={styles.bold}>University of Victoria</Typography>
      </div>
      <br />
      <div style={styles.line}>
        <Typography>Seeking Full-time employment JAN 2022</Typography>
      </div>
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

export default StandardSchool;
