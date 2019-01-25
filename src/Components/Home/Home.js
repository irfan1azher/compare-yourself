import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'; 
import { AccountCircle } from '@material-ui/icons';
import faceText from './face-text.png';

const styles = (theme) => ({
  home: {
    display: 'block',
    boxSizing: 'border-box',
    margin: 0,
    padding: 10,
    height: '100%',
    // background: 'linear-gradient(to bottom, #ccc, #ddd, #ddd)',
  },
  cyBox: {
    margin: 'auto',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '600px',
    height: '95%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '0 10px 20px 10px',
    // background: 'lightblue',
    borderRadius: 20,
    overflow: 'scroll',
  },
  img: {
    display: 'block',
    boxSizing: 'border-box',
    height: '80%',
    width: '100%',
    // background: 'red',
    padding: 20,
    backgroundImage: `url(${faceText})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: 20,
  },
  icon: {
    marginRight: 10,
  }
});


class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.home} >
        <div className={classes.cyBox}>
          <h1>Compare Yourself</h1>
          <h3>A Full Stack Project</h3>
          <Link to="/s" style={{textDecoration: 'none'}} >
            <Button
              variant='contained'
              color='primary'
              >
              <AccountCircle className={classes.icon}/>
              Compare Yourself
            </Button>          
          </Link>
          <ul>
            <li>React on the front</li>
            <li>AWS for the back and auth</li>
            <li>Add your details and compare yourself!</li>
          </ul>
          
          <div className={classes.img}></div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
