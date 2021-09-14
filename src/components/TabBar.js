import { Tabs, Tab } from "@material-ui/core";

const tabs = ["Standard", "Buzzy", "In-Depth"];
const TabBar = ({ value, onChange, children }) => {
  return (
    <div style={styles.line}>
      <Tabs value={value} onChange={onChange}>
        {tabs.map((title, i) => {
          return <Tab label={value === i ? `${title} Resume` : title}></Tab>;
        })}
      </Tabs>
      {children}
    </div>
  );
};

const styles = {
  line: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default TabBar;
