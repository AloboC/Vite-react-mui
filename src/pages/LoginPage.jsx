import React from 'react'

// * mui styles .................................................
import { makeStyles } from '@material-ui/core/styles'

// * mui Componentes ............................................
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

// * mui icons ...................................................
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone'
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone'

// * Authentication ...................................................
import useAuth from '../auth/useAuth'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    height: 'auto',
    overflow: 'hidden'
  },

  rootText: {
    '& > *': {
      margin: theme.spacing(1),
      width: '95%'
    }
  },

  button: {
    margin: theme.spacing(2)
  },

  paper: {
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '8px',
    backgroundColor: '#eee',
    boxShadow: '-3px 8px 15px 6px #616161'
  },

  container: {
    minHeight: 'inherit',
    overflow: 'hidden'
  }
}))

// ! ******************************************* PRINCIPAL *******************************************
const LoginPage = () => {
  const classes = useStyles()
  const auth = useAuth()
  const initSession = () => auth.login({ id: 1, username: 'alobo' })

  return (
    <Container maxWidth="xl">
      <div className={classes.root}>
        <Grid
          container
          className={classes.container}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={8} md={5} lg={4}>
            <Paper className={classes.paper}>
              <Typography
                variant="h3"
                component="h3"
                gutterBottom
                color="textPrimary"
                // color="error"
              >
                <PermIdentityTwoToneIcon fontSize="large" />
                Login
              </Typography>
              <form className={classes.rootText} noValidate autoComplete="off">
                <TextField
                  id="outlined-user"
                  label="Usuario"
                  variant="outlined"
                  xs={12}
                  size="medium"
                />
                <TextField
                  id="outlined-password"
                  label="Contraseña"
                  variant="outlined"
                  type="password"
                  xs={12}
                  size="medium"

                />
              </form>

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<LockOpenTwoToneIcon />}
                onClick={initSession}
              >
                Login
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                // onClick={initSession}
              >
                Cancel
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default LoginPage
