import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

// ?........................... COMPONENTES ....................................
// import ListSubheader from '@material-ui/core/ListSubheader'
import ItemMenu from './ItemMenu'
import { Collapse, Divider, List } from '@material-ui/core'

// ?........................... ICONS ..........................................
// import StarBorder from '@material-ui/icons/StarBorder'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
import BuildRoundedIcon from '@material-ui/icons/BuildRounded'
import ReceiptIcon from '@material-ui/icons/Receipt'

// ?........................... ESTILOS ........................................
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    boxSizing: 'border-box'
  },
  itemLvl1: {
    color: '#fff!important',
    fontSize: '1.6rem'
  },
  itemLvl2: {
    color: '#fff!important',
    fontSize: '1.3rem',
    marginLeft: '1rem'
  }
}))

// ?........................... PRINCIPAL .....................................
const Lista = () => {
  const classes = useStyles()
  const [statePanelControl, setStatePanelControl] = useState(false)
  const [statePanelMantenimiento, setStatePanelMantenimiento] = useState(false)
  const [stateFacturacion, setStateFacturacion] = useState(false)
  const [stateFMantenimiento, setStateFMantenimiento] = useState(false)
  const [stateTMantenimiento, setStateTMantenimiento] = useState(false)

  // ?........................... FUNCIONES ....................................
  const setPanelControl = () => setStatePanelControl(!statePanelControl)
  const setPanelMantenimiento = () => setStatePanelMantenimiento(!statePanelMantenimiento)

  const setFacturacion = () => setStateFacturacion(!stateFacturacion)
  const setFMantenimiento = () => setStateFMantenimiento(!stateFMantenimiento)
  const setTMantenimiento = () => setStateTMantenimiento(!stateTMantenimiento)

  // ?........................... RETURN .......................................
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
      className={classes.root}
    >
      <ItemMenu id="0000000000" text="Inicio" icon={<HomeIcon className={classes.itemLvl1} />} path="/" />

      {/* ############################################ PANEL DE CONTROL ############################################ */}
      <ItemMenu
        id="1000000000"
        text="Panel de Control"
        icon={<SettingsIcon className={classes.itemLvl1} />}
        changeState={setPanelControl}
        estate={statePanelControl}
      />
      <Collapse in={statePanelControl} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ItemMenu
            id="10010000000"
            text="Mantenimiento"
            icon={<BuildRoundedIcon className={classes.itemLvl2} />}
            changeState={setPanelMantenimiento}
            estate={statePanelMantenimiento}
          />
          <Collapse in={statePanelMantenimiento} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ItemMenu icon="" id="1001010000" text="Empresas" path="/" />
              <ItemMenu icon="" id="1001020000" text="Periodos" path="/" />
              <ItemMenu icon="" id="1001030000" text="Tipos de Identificación" path="/" />
              <ItemMenu icon="" id="1001040000" text="Tipos de Usuario" path="/" />
              <ItemMenu icon="" id="1001050000" text="Usuarios" path="/" />
            </List>
            <Divider />
          </Collapse>

          {/* <ItemMenu icon={<StarBorder />} text="Starred" path="/" /> */}
          <Divider color="#fff" />
        </List>
      </Collapse>

      {/* ############################################ FACTURACION ############################################ */}

      <ItemMenu
        id="2000000000"
        text="Facturación"
        icon={<ReceiptIcon className={classes.itemLvl1} />}
        changeState={setFacturacion}
        estate={stateFacturacion}
      />
      <Collapse in={stateFacturacion} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ItemMenu
            id="2001000000"
            text="Mantenimiento"
            icon={<BuildRoundedIcon className={classes.itemLvl2} />}
            changeState={setFMantenimiento}
            estate={stateFMantenimiento}
          />
          <Collapse in={stateFMantenimiento} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ItemMenu icon="" id="2001010000" text="Cajas" path="/" />
              <ItemMenu icon="" id="2001020000" text="Clientes" path="/" />
              <ItemMenu icon="" id="2001030000" text="Puestos de Venta" path="/" />
              <ItemMenu icon="" id="2001040000" text="Puntos de Venta" path="/" />
              <ItemMenu icon="" id="2001050000" text="Ruteros" path="/" />
              <ItemMenu icon="" id="1001060000" text="Vendedores" path="/" />
              <ItemMenu icon="" id="1001070000" text="Zonas Cliente" path="/" />
              <Divider />
            </List>
          </Collapse>
        </List>
        <Divider />

        <List component="div" disablePadding>
          <ItemMenu
            id="2002000000"
            text="Transacciones"
            icon=""
            changeState={setTMantenimiento}
            estate={stateTMantenimiento}
          />
          <Collapse in={stateTMantenimiento} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ItemMenu icon="" id="2002010000" text="Retail" path="/" />
              <ItemMenu icon="" id="2002020000" text="Facturación Rapida" path="/" />
              <ItemMenu icon="" id="2002030000" text="Nota de Crédito" path="/" />
              <ItemMenu icon="" id="2002040000" text="Pedidos" path="/" />
            </List>
            <Divider />
          </Collapse>
        </List>
        <Divider />
      </Collapse>
    </List>
  )
}

export default Lista
