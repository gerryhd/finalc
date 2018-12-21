import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "./MediaCard";


const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: "40px 240px",
    }
});

const Dashboard = (props) => {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item sm={12}>
                    <Card />
                </Grid>
                <Grid item sm={4}>
                    <Card/>
                </Grid>
                <Grid item sm={4}>
                    <Card/>
                </Grid>
                <Grid item sm={4}>
                    <Card/>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Dashboard);