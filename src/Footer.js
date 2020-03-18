import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    footerLink: {
        color: "#000000",
        fontSize: "10px",
    },
    footerText: {
        color: "#000000",
        fontSize: "10px",
    }
});

class Footer extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <footer className={classes.footer}>
                    <Typography className={classes.footerText} variant="subtitle1" align="center" color="textSecondary">
                        @{new Date().getFullYear()}<a className={classes.footerLink} href="http://www.pennymacusa.com"> PennyMac Inc</a>
                        . All information contained herein applies to U.S. only.
                    </Typography>
                </footer>
            </React.Fragment>
        );
    }
}
Footer.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(Footer);