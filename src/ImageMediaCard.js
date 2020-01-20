import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import RefreshIcon from '@material-ui/icons/Refresh';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import InfoPaper from './InfoPaper.js';

const styles = ({
  card: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxHeight: '80%',
      maxWidth: '80%',
      marginTop: '5vh',
      marginBottom: '5vh'
  },
  media: {
      height: 'auto',
      width: 'auto',
  },
  controls: {
    alignItems: 'center',
    padding: 12,
  },
  refreshIcon: {
    height: '5vh',
    width: '5vh',
  },
  infoIcon: {
    height: '5vh',
    width: '5vh',
  },
});


function MainContent(props) {
  const infoOpen = props.infoOpen;
  const currentImage = props.currentImage;

  if (infoOpen) {
    return <InfoPaper/>
  } else {
    return <CardMedia
      component="img"
      alt="JCoates"
      image={currentImage}
      title="JCoates"
    />
  }
}

class ImgMediaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      infoOpen: false,
    };
  }

  async handleInfo() {
    if (this.state.infoOpen) {
      await this.handleRefresh();
      this.setState({image: this.state.image, infoOpen: false});
    } else {
      this.setState({image: this.state.image, infoOpen: true});
    }
  }

  async handleRefresh() {
    const jsonResponse = await fetch('https://frozen-fortress-19650.herokuapp.com/dne').then((response) => {
      return response.json();
    });
    this.setState({image: jsonResponse['image_url'], infoOpen: false });
  };

  componentDidMount() {
    this.handleRefresh();
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={`sized-card ${classes.card}`}>
        <MainContent infoOpen={this.state.infoOpen} currentImage={this.state.image}/>
        <div className={classes.controls}>
            <IconButton aria-label="Regenerate" onClick={this.handleRefresh.bind(this)}>
              <RefreshIcon className={classes.refreshIcon}/>
            </IconButton>
            <IconButton aria-label="Info" onClick={this.handleInfo.bind(this)}>
              <InfoIcon className={classes.infoIcon}/>
            </IconButton>
          </div>
      </Card>
    );
  }
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ImgMediaCard);
