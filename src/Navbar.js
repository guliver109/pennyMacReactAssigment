import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  grow: {
    flexGrow: 10,
    height: '100px'
  },
  title: {
    display: 'none',
    fontSize: 24,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  pos: {
    marginBottom: 12,
  },
});

class Navbar extends React.Component {


  render() {

    const { classes } = this.props;
    return (
      <div>

        <div className={classes.grow}>
          <AppBar position="static"
            style={{ transform: 'none' }}
          >
            <Toolbar>
              <Typography className={classes.title} variant="h5" noWrap>
                PennyMac Assigment
              </Typography>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
              </div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={this.menuId}
                aria-haspopup="true"
                onClick={this.handleClick}

                color="inherit"
              >
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    )
  }
}
Navbar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(Navbar);


