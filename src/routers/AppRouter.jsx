import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// ? ............................. NAVEGACIÓN .............................

import Contenedor from '../components/Contenedor'
// import NavBar from '../components/NavBar'
// import Lista from '../components/Lista'

// ? ................... PUBLIC AND PRIVATES ROUTES .......................
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'



// ? ................................ PAGES ...............................
import AboutPage from '../pages/AboutPage'
import CategoriesPage from '../pages/CategoriesPage'
import ContactPage from '../pages/ContactPage'
import DashboardPage from '../pages/DashboardPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import PaymentsPage from '../pages/PaymentsPage'
import ProfilePage from '../pages/ProfilePage'
import RegisterPage from '../pages/RegisterPage'

// todo: ............................... APP ROUTER .................................
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/about" component={AboutPage} />
        <PrivateRoute exact path="/contact" component={ContactPage} />
        <PrivateRoute exact path="/categories" component={CategoriesPage} />
        <PrivateRoute exact path="/profile/:username" component={ProfilePage} />

        {/* RUTAS PUBLICAS */}
        <PublicRoute exact path="/login" component={LoginPage} />
        <PublicRoute exact path="/register" component={RegisterPage} />

        {/* RUTAS PRIVADAS */}
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <PrivateRoute exact path="/payment" component={PaymentsPage} />

        {/* RUTA CON PARÁMETROS */}

        {/*  */}
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter
