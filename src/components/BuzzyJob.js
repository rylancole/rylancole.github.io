import { ImageList, ImageListItem, Typography } from "@material-ui/core";

const BuzzyJob = ({ data }) => {
  return (
    <ImageList cols={4} rowHeight="auto" style={styles.items}>
      {data.map((item) => {
        return (
          <ImageListItem key={item}>
            <Typography style={styles.item}>{item}</Typography>
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

const styles = {
  items: {
    paddingTop: "32px",
  },
  item: {
    fontWeight: "bold",
    textAlign: "center",
    padding: "8px",
  },
};

export default BuzzyJob;
