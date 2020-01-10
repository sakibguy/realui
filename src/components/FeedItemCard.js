import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles => (theme => ({
    card: {
      maxWidth: 100,
    },
    media: {
      width: 40
    },
  }));

function FeedItemCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} style={{marginTop: 20}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          style={{position: 'relative',width: '100%'}}
          component={props.mediaType}
          alt="Contemplative Reptile"
          height="auto"
          src={props.mediaUrl}
          title="Contemplative Reptile"
          controls
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default FeedItemCard;