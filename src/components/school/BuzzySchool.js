import { ImageList, ImageListItem, Typography } from "@material-ui/core";

const data = ["UVic BSc", "CSC Major", "Physics Minor", "New Grad 2022"];

const BuzzySchool = () => {
  return (
    <>
      <Typography style={styles.bold}>Education</Typography>
      <ImageList cols={4} rowHeight="auto" style={styles.items}>
        {data.map((item) => {
          return (
            <ImageListItem key={item}>
              <Typography style={styles.item}>{item}</Typography>
            </ImageListItem>
          );
        })}
      </ImageList>
    </>
  );
};

const styles = {
  bold: {
    fontWeight: "bold",
  },
  items: {
    paddingTop: "32px",
  },
  item: {
    fontWeight: "bold",
    textAlign: "center",
    padding: "8px",
  },
};

export default BuzzySchool;
