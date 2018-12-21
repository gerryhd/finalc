import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountDrawer from "./AccountDrawer";

const AppHeader = (props) => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <AccountDrawer/>
                    <Typography variant="title" color="inherit">
                        Financy
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AppHeader;