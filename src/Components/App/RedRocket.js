import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  redRocket: {
    fill: 'red',
  },
}

class RedRocket extends React.Component {
  
  render() {
    const {classes} = this.props
    return (   
      <svg viewBox="0 0 32 32" className={classes.redRocket}>
        <path d="M22 2 l-10 10 h-6l-6 8 c0 0 6.357-1.77 10.065-0.94 l-10.065 12.94 13.184-10.255 c1.839 4.208-1.184 10.255-1.184 10.255l8-6 v-6l10-10 2-10-10 2z">
        </path>
      </svg>          
    )
  }
}

export default withStyles(styles)(RedRocket);