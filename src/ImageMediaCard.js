import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  card: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxHeight: '80%',
      maxWidth: '80%',
      marginTop: '5vh',
      marginBottom: '5'
  },
  media: {
      height: 'auto',
      width: 'auto',
  },
  controls: {
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  refreshIcon: {
    height: '5vh',
    width: '5vh',
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();
  const [image, setImage] = React.useState('000023.png');

  const handleRefresh = () => {
    if (image === '000023.png') {
      setImage('002300.png'); 
    } else {
      setImage('000023.png'); 
    }
    
  };


  return (
    <Card className={`sized-card ${classes.card}`}>
        <CardMedia
          component="img"
          alt="JCoates"
          image={image}
          title="JCoates"
        />
      <div className={classes.controls}>
          <IconButton aria-label="Regenerate">
            <RefreshIcon className={classes.refreshIcon} onClick={handleRefresh}/>
          </IconButton>
        </div>
    </Card>
  );
}
