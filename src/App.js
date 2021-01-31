import React, { createContext, useState } from 'react'; 
import Footer from './Components/Footer/Footer'; 
import Header from './Components/Header/Header'; 
import RegistrationForm from './Components/RegistrationFrom/RegistrationForm';
import Volunteers from './Components/Volunteers/Volunteers';
import { 
  Switch,
  Route 
} from "react-router-dom";
import Banner from './Components/Header/Banner';
import Admin from './Components/Admin/Admin';
import LogInForm from './Components/LogInForm/LogInForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import User from './Components/User/User'; 
import Event from './Components/Event/Event';

export const UserContext=createContext();

const App = () => {

  // bg color  style={{backgroundColor:'#F0F2F5'}}

  const [loggedInUser,setLoggedInUser]=useState({})

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
      <Header/>
      <Switch>
          <Route exact path='/'>
              <Banner/>
              <Volunteers/>
          </Route>
          <Route path='/login'> 
              <LogInForm/>
          </Route>
          <PrivateRoute path='/admin'>
              <Admin/>
          </PrivateRoute>
          <PrivateRoute path='/registration/:name'>
              <RegistrationForm/>
          </PrivateRoute>
          <PrivateRoute path='/user'>
              <User/>
          </PrivateRoute>
          <PrivateRoute path='/event'> 
            <Event/>
          </PrivateRoute>
      </Switch>
    <Footer/>
    </UserContext.Provider>
  );
};

export default App;

