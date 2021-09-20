import { Card } from "@material-ui/core";
import StandardSchool from "./StandardSchool";
import BuzzySchool from "./BuzzySchool";
import InDepthSchool from "./InDepthSchool";

const TabValue = {
  STANDARD: 0,
  BUZZY: 1,
  IN_DEPTH: 2,
};

const SchoolCard = ({ isDesktop, value }) => {
  return (
    <Card style={{ margin: "16px", padding: "8px" }}>
      {value === TabValue.STANDARD && <StandardSchool isDesktop={isDesktop} />}
      {value === TabValue.BUZZY && <BuzzySchool />}
      {value === TabValue.IN_DEPTH && <InDepthSchool />}
    </Card>
  );
};

export default SchoolCard;
