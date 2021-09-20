import { Card, IconButton, Tooltip, Typography } from "@material-ui/core";
import StandardJob from "./StanardJob";
import BuzzyJob from "./BuzzyJob";
import InDepthJob from "./InDepthJob";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LaunchIcon from "@material-ui/icons/Launch";

const TabValue = {
  STANDARD: 0,
  BUZZY: 1,
  IN_DEPTH: 2,
};

const JobCard = ({ isDesktop, data, value }) => {
  return (
    <Card style={{ margin: "16px", padding: "8px" }}>
      <div style={styles.line}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography style={styles.bold}>{data.company}</Typography>
          {isDesktop && data.url && (
            <Tooltip title="Open company website">
              <IconButton size="small" href={data.url}>
                <LaunchIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          {isDesktop && data.linkedin && (
            <Tooltip title="Open LinkedIn profile">
              <IconButton size="small" href={data.linkedin}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </div>
        {isDesktop && <Typography>{data.dates}</Typography>}
      </div>
      <div style={styles.line}>
        <Typography style={styles.bold}>{data.title}</Typography>
        {isDesktop && <Typography>{data.location}</Typography>}
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
