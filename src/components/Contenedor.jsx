import React, { useState } from 'react'
import NavBar from './NavBar'
import Menu from './Menu'
import { Hidden, makeStyles } from '@material-ui/core'

const estilos = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    backgroundColor: '#fff',
    minHeight: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: theme.spacing(3)
  }
}))

// ======================================================================================================================================================================================================================================================================================================================================================
//
//   ####   #####   ##     ##  ######  #####  ##     ##  #####  ####     #####   #####
//  ##     ##   ##  ####   ##    ##    ##     ####   ##  ##     ##  ##  ##   ##  ##  ##
//  ##     ##   ##  ##  ## ##    ##    #####  ##  ## ##  #####  ##  ##  ##   ##  #####
//  ##     ##   ##  ##    ###    ##    ##     ##    ###  ##     ##  ##  ##   ##  ##  ##
//   ####   #####   ##     ##    ##    #####  ##     ##  #####  ####     #####   ##   ##
//
// ======================================================================================================================================================================================================================================================================================================================================================

const Contenedor = ({ component }) => {
  const classes = estilos()
  const [abrir, setAbrir] = useState(false)

  const cerrarNavBar = () => setAbrir(!abrir)

  return (
    <div className={classes.root}>
      <NavBar position="fixed" openMenu={() => cerrarNavBar()} />

      <Hidden xsDown>
        <Menu variant="permanent" open={true} />
      </Hidden>

      <Hidden smUp>
        <Menu variant="temporary" open={abrir} onClose={() => cerrarNavBar()} />
      </Hidden>

      <div className={classes.content}>
        <div className={classes.offset}></div>
        {component}
      </div>
      <br />
    </div>
  )
}

export default Contenedor
