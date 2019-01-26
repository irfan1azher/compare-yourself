import React from "react";
import { Redirect } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Auth } from 'aws-amplify';

const styles = {
  button: {
    position: 'absolute',
    top: 6,
    right: 20
  }
};

class SignOutButton extends React.Component {
  state = {
    redirectHome: false
  }
  
  handleSignOut = () => {
    Auth.signOut()
      .then(data => {
        console.log('in handleSignOut: signedout - data: ', data);
        this.setState(() => ({
          redirectHome: true
        }))
      })
      .catch(err => console.error(err))}

  render() {
    const { redirectHome } = this.state
    const { classes } = this.props

    if (redirectHome === true) {
      return <Redirect to='/' />
    }

    return (
      <Button color='default' size='small' className={classes.button} onClick={this.handleSignOut}>Sign Out</Button>
    )
  }
}

export default withStyles(styles)(SignOutButton);