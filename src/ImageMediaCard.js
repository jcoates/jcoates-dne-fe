import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';

const styles = ({
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
    padding: 12,
  },
  refreshIcon: {
    height: '5vh',
    width: '5vh',
  },
});

class ImgMediaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  async handleRefresh() {
    const jsonResponse = await fetch('http://127.0.0.1:5000/dne').then((response) => {
      return response.json();
    });

    this.setState({image: jsonResponse['image_url']});
  };

  componentDidMount() {
    this.handleRefresh();
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={`sized-card ${classes.card}`}>
          <CardMedia
            component="img"
            alt="JCoates"
            image={this.state.image}
            title="JCoates"
          />
        <div className={classes.controls}>
            <IconButton aria-label="Regenerate" onClick={this.handleRefresh.bind(this)}>
              <RefreshIcon className={classes.refreshIcon}/>
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
