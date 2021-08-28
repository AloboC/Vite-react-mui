import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

// ?........................... COMPONENTES ....................................
import ListSubheader from '@material-ui/core/ListSubheader'
import ItemMenu from './ItemMenu'
import { Collapse, Divider, List } from '@material-ui/core'

// ?........................... ICONS ..........................................
import StarBorder from '@material-ui/icons/StarBorder'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
import BuildRoundedIcon from '@material-ui/icons/BuildRounded'

// ?........................... ESTILOS ........................................
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

// ?........................... PRINCIPAL .....................................
const Lista = () => {
  const classes = useStyles()
  const [statePanelControl, setStatePanelControl] = useState(false)
  const [openMantenimiento, setStateMantenimiento] = useState(false)

  // ?........................... FUNCIONES ....................................
  const setPanelControl = () => setStatePanelControl(!statePanelControl)
  const setMantenimiento = () => setStateMantenimiento(!openMantenimiento)

  // ?........................... RETURN .......................................
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      <ItemMenu icon={<HomeIcon />} text="Inicio" path="/" />
      <ItemMenu
        icon={<SettingsIcon />}
        text="Panel de Control"
        changeState={setPanelControl}
        estate={statePanelControl}
      />

      <Collapse in={statePanelControl} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ItemMenu
            icon={<BuildRoundedIcon />}
            text="Mantenimiento"
            changeState={setMantenimiento}
            estate={openMantenimiento}
          />
          <Collapse in={openMantenimiento} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ItemMenu icon="" text="Starred" path="/" />
              <ItemMenu icon="" text="Starred" path="/" />
              <ItemMenu icon="" text="Starred" path="/" />
              <ItemMenu icon="" text="Starred" path="/" />
              <ItemMenu icon="" text="Starred" path="/" />
              <ItemMenu icon="" text="Starred" path="/" />
              <ItemMenu icon="" text="Starred" path="/" />
              <ItemMenu icon="" text="Starred" path="/" />
              <ItemMenu icon="" text="Starred" path="/" />
            </List>
            <Divider />
          </Collapse>
          <ItemMenu icon={<StarBorder />} text="Starred" path="/" />
        </List>
        <Divider />
      </Collapse>
    </List>
  )
}

export default Lista
