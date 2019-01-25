import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { SvgIcon, IconButton} from '@material-ui/core';
import Amplify from 'aws-amplify';
import Home from '../Home/Home';
import CompareYourself from '../CY/CompareYourself';
import aws_exports from '../../aws-exports';

Amplify.configure(aws_exports);

const styles = {
  appmain: {
    boxSizing: 'border-box',
    display: 'block',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // background: 'yellow',
    // padding: '0 5px 50px 5px',
  },
  routeContent: {
    boxSizing: 'border-box',
    display: 'block',
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    // background: 'violet',
  },
  appbar: {
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    background: '#ddd',
    padding: '5px 10px',
  },
  home: {
    display: 'block',
    width: '100%',
    textDecoration: 'none',
    underline: 'none',
  },
};

function App(props) {
  const { classes } = props
  console.log("This is the process.env", process.env.PUBLIC_URL)
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={classes.appmain}>
        <div className={classes.appbar}>
          <Link to="/" >
            <IconButton color="default" className={classes.home} aria-label="Go Home">
              <SvgIcon>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon>
            </IconButton>
          </Link>        
        </div>
        <div className={classes.routeContent}>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/s" component={CompareYourself} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    <Component {...props} />
  )} /> 
)

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);