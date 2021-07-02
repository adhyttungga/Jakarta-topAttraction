import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpIcon from '@material-ui/icons/Help'
import CancelIcon from '@material-ui/icons/Cancel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appbar: {
    flexGrow: 1,
    justifyContent: "space-around",
    minHeight: 125,
    minWidth: 1420,
    backgroundColor: "#e6e6e6",
    "& > *": {
      color: "#647d81"
    }
  },
  headerText: {
    flexGrow: 1,
    color: "#292b38"
  },
  button: {
    "& svg": {
      fontSize: "1.94rem"
    }
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const { toggleCancel } = props

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.headerText}>
            <strong>TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE</strong>
          </Typography>
          <IconButton className={classes.button}>
            <SettingsIcon />
          </IconButton>
          <IconButton className={classes.button}>
            <HelpIcon />
          </IconButton>
          <IconButton className={classes.button} onClick={e => toggleCancel()}>
            <CancelIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header