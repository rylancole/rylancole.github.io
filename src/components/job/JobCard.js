import { Card, Typography } from "@material-ui/core";
import StandardJob from "./StanardJob";
import BuzzyJob from "./BuzzyJob";
import InDepthJob from "./InDepthJob";

const TabValue = {
  STANDARD: 0,
  BUZZY: 1,
  IN_DEPTH: 2,
};

const JobCard = ({ data, value }) => {
  return (
    <Card style={{ margin: "16px", padding: "8px" }}>
      <div style={styles.line}>
        <Typography style={styles.bold}>{data.company}</Typography>
        <Typography>{data.dates}</Typography>
      </div>
      <div style={styles.line}>
        <Typography style={styles.bold}>{data.title}</Typography>
        <Typography>{data.location}</Typography>
      </div>
      <div>
        {value === TabValue.STANDARD && <StandardJob data={data.standard} />}
        {value === TabValue.BUZZY && <BuzzyJob data={data.buzzy} />}
        {value === TabValue.IN_DEPTH && <InDepthJob data={data.in_depth} />}
      </div>
    </Card>
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

export default JobCard;
