import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Icon
} from '@material-ui/core';

const styles = (theme) => ({
  userBox: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    // background: 'lightgreen',
    // justifyContent: 'flex-start',
    textAlign: 'center',
    flexDirection: 'column',
    // alignContent: 'flex-start'
  },
  listBox: {
    display: 'flex',
    width: '100%',
    // background: 'pink',
  },
  titleBox: {
    display: 'flex',
    width: '100%',
    // background: 'green',
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    // background: 'red',
    margin: '10px 0 5px 0',
  },
  listPrev: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  listPrevItem: {
    display: 'flex',
    width: 200,
    textAlign: 'center',
    // background: 'purple'
  },
  buttonBox: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    bottom: 60,
    // background: 'yellow'
  },
  editButton: {
    position: 'relative',
    right: 10,
  },
})

function CompareYourselfSingle(props) {
  const { classes, handleEdit, userData } = props;
  const { mobile, height, shoe } = userData;

  return (
    <div className={classes.userBox}>
      <div className={classes.savedBox} >
        
        <div className={classes.titleBox} >
          <Typography align='center' variant="subtitle2" className={classes.title}>
            Your Saved Data
          </Typography>
        </div>

        <div className={classes.listBox} >
          <List className={classes.listPrev} >
            <ListItem className={classes.listPrevItem} >
              <ListItemText
                primary={mobile}
                secondary={'Mobile Value ($)'}
              />
            </ListItem>
            <ListItem className={classes.listPrevItem} >
              <ListItemText
                primary={height}
                secondary={'Height (cm)'}
              />
            </ListItem>
            <ListItem className={classes.listPrevItem} >
              <ListItemText
                primary={shoe}
                secondary={'Shoe Count (pairs)'}
              />
            </ListItem>
          </List> 
        </div>

        <div className={classes.buttonBox} >
          <IconButton 
            size='small' 
            color="default" 
            aria-label="Edit" 
            className={classes.editButton}
            onClick={handleEdit}>
            <Icon>edit_icon</Icon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(CompareYourselfSingle);
