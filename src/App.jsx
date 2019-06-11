import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const data = require('./zenzogames.json');

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
  },
});
function displayGames(datas) {
  const classes = useStyles();

  return datas.map(game => {
    return (
      <Grid item xs={2} key={game.id}>
        <Card className={classes.paper}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={game.image}
              title={game.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h10" component="h2">
                {game.title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary" align="center">
              {game.price} ZNZ
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });
}
export default function MediaCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ZENZO Arcade
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <br />
      <Grid container spacing={1}>
        {displayGames(data)}
      </Grid>
    </div>
  );
}

// export default hot(MediaCard);
