import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        // maxWidth: 345,
    },
    media: {
        height: 120,
    },
};

const MediaCard = (props) => {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        $11.25
                    </Typography>
                    <Typography component="p">
                        Last transaction: -$20.00 at Jhonny Rocket's
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Details
                </Button>
                <Button size="small" color="primary">
                    What to do
                </Button>
            </CardActions>
        </Card>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);