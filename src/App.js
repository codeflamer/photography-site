import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
              <Home/>
          </Route>
          <Route path="/login" >
              <Login/>
          </Route>
          <Route path="/signup" >
              <SignUp/>
          </Route>
        </Switch>
        
    </Router>
  )
}

export default App
