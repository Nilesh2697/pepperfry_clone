import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%",

  },
  media: {
    maxWidth:'100%',
    minWidth:'90%',
    // marginTop:'-10%',
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(120deg)"
  },
}));

const RecipeReviewCard = props => {
  const {src} = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img className={classes.media} src={src}/>
    </Card>
  );
};

export default RecipeReviewCard;
