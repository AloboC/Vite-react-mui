import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

// ? ........................... ESTILOS ..................................
const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(2)
  }

  // root: {
  //   // fontFamily: 'Aria....',
  //   paddingLeft: theme.spacing(2),

  //   fontSize: '2rem',
  //   '&:selected': {
  //     // backgroundColor: '#B2D0EB!important'
  //     backgroundColor: '#eee!important'
  //   },
  //   '&:hover': {
  //     // backgroundColor: '#B2D0EB!important',
  //     borderBotton: '1px solid #fff',
  //     color: '#fff'
  //     // color: '#707070!important'
  //   }
  // }
}))

// ! ........................... PRINCIPAL .................................
const ItemMenu = ({ id, icon, text, path, changeState, estate }) => {
  //
  const classes = useStyles()
  const history = useHistory()

  // ? .......................... FUNCIONES ................................
  const goTo = (e, path) => {
    e.preventDefault()
    history.push(path)
  }

  const change = (e) => {
    e.preventDefault()
    changeState()
  }

  // ? ............................ RETURN ..................................
  return (
    <>
      {path ? (
        <ListItem button id={id} onClick={(e) => goTo(e, path)}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ) : (
        <ListItem button id={id} onClick={(e) => change(e)} className={classes.nested}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
          {estate ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      )}
    </>
  )
}

export default ItemMenu
