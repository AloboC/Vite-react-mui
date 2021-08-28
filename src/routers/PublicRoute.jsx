import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth'

// const user = null
// const user = { id: 1, userName: 'alobo' }

const PublicRoute = ({ component: Component, ...res }) => {
  const auth = useAuth()
  return (
    <Route {...res}>
      {!auth.isLogged() ? <Component /> : <Redirect to="/dashboard" />}
    </Route>
  )
}

export default PublicRoute
