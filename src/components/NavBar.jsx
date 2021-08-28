import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'

// *................................... Constantes ..................................
const drawerW = 240

// *.................................... Estilos ....................................
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  title: {
    flexGrow: 1 // Para que Ocupe el Campo restante
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerW}px)`,
      marginLeft: drawerW
    }
  }
}))

// =======================================================================================================================================================================================================================================================================================================================
//
//  ##     ##    ###    ##   ##         #####     ###    #####
//  ####   ##   ## ##   ##   ##         ##  ##   ## ##   ##  ##
//  ##  ## ##  ##   ##  ##   ##         #####   ##   ##  #####
//  ##    ###  #######   ## ##          ##  ##  #######  ##  ##
//  ##     ##  ##   ##    ###           #####   ##   ##  ##   ##
//
// =======================================================================================================================================================================================================================================================================================================================

const NavBar = ({ position, openMenu }) => {
  const classes = useStyles()
  return (
    <AppBar position={position} className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={openMenu}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap className={classes.title}>
          Jalcgar
        </Typography>
        <IconButton color="inherit">
          <AccountCircleRoundedIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
