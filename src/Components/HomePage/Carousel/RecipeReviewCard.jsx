import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import styles from './Carousal.module.css';
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500
  },
  media: {
    height: 450,
    paddingTop: "56.25%",
    border: "1px solid black",
    minWidth:'100%',
    backgroundSize:'contain'
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
}));

const RecipeReviewCard = props => {
  const {src } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader style={{minWidth:'80%'}}/>
      <CardMedia
        className={classes.media}
        image={src}
          
      />
      <CardContent/>
     
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
};

export default RecipeReviewCard;
