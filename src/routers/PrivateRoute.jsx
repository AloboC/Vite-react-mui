import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// ? ........................... AUTHENTICATION ...........................
import useAuth from '../auth/useAuth'
// ? ........................... COMPONENTES  ...........................
import Contenedor from '../components/Contenedor'
// const user = null
// const user = { id: 1, userName: 'alobo' }

const PrivateRoute = ({ component: Component, ...res }) => {
  const auth = useAuth()
  return (
    <Route {...res}>
      {auth.isLogged() ? (
        <Contenedor component={<Component />} />
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  )
}

export default PrivateRoute
