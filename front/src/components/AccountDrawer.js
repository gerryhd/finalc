import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from "@material-ui/core/es/Modal/Modal";
import asyncComponent from './AsyncComponent'


const AccountForm = asyncComponent(() =>
    import('./AccountForm').then(module => module.default)
);



const styles = {
    list: {
        width: 250,
    },
};


class AccountDrawer extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
        openModal: false,
        left: false
    };

    toggleDrawer = (open) => () => {
        this.setState({
            left: open,
        });
    };

    handleOpen = () => {
        this.setState({ openModal: true });
    };

    handleClose = () => {
        this.setState({ openModal: false });
    };

    render() {
        const { classes } = this.props;

        const accountDrawer = (
            <div className={classes.list}>
                <List>
                    <ListItem button onClick={this.handleOpen} key={"add-account"}>
                        <ListItemText primary={"Agregar cuenta"} />
                    </ListItem>
                </List>
            </div>
        );

        const newAccountModal = (
            <Modal open={this.state.openModal}
                   onClose={this.handleClose}
            >
                <AccountForm />
            </Modal>
        );

        return (

            <div>
                <IconButton color="inherit" aria-label="Menu"
                            aria-haspopup="true"
                            onClick={this.toggleDrawer(true)}>
                    <MenuIcon/>
                </IconButton>
                <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        {accountDrawer}
                    </div>
                </Drawer>
                {newAccountModal}
            </div>
        );
    }
}

AccountDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountDrawer);
