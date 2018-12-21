import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/es/Button/Button";
import Divider from "@material-ui/core/es/Divider/Divider";
import axios from 'axios';


const styles = theme => ({
    modal: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    },
    textField: {
        width: '100%',
    },
    inputAlignedLeft: {
        textAlign: 'right',
        fontSize: 20
    }

});


class AccountForm extends React.Component {
    constructor(props){
        super(props);
    };

    state = {
        name: '',
        balance: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleSubmit = event => {
        event.preventDefault();

        let account = {
            name: this.state.name,
            balance: this.state.balance
        };

        axios.post('')
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.modal}>
                <Typography component="h2" variant="h1" gutterBottom>
                    Add a new account
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    An account is a source of stored money from which you can withdraw and add to.
                </Typography>
                <form noValidate autoComplete="off">
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        inputProps={{className: classes.inputAlignedLeft}}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="balance"
                        label="Balance"
                        value={this.state.balance}
                        onChange={this.handleChange('balance')}
                        type="number"
                        className={classes.textField}
                        inputProps={{className: classes.inputAlignedLeft}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />

                </form>
                <br/>
                <Button onClick={this.handleSubmit} variant="contained" size="large" color="primary" className={classes.button}>
                    Save
                </Button>
            </div>

        );
    }
}

AccountForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountForm);
