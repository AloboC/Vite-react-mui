import React from 'react'
import { makeStyles, Drawer, Divider } from '@material-ui/core'
import Lista from './Lista'

// *................................... Constantes ..................................
const drawerW = 260

// *.................................... Estilos ....................................
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerW,
    flexShrink: 0,
    transition: 'all 3s'
  },
  drawerPaper: {
    // cubre todo el alto de la pantalla
    width: drawerW,
    backgroundColor: '#282c34',
    color: '#fff'
  },

  offset: theme.mixins.toolbar
}))
// !..................................... Menu ........................................
const Menu = ({ variant, open, onClose }) => {
  const classes = useStyles()
  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      variant={variant}
      open={open}
      onClose={onClose ?? null}
    >
      <div className={classes.offset}>
        <img src="" alt="Logo" />
      </div>
      <Divider />
      <Lista />
    </Drawer>
  )
}

export default Menu
