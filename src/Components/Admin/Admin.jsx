import React from 'react';
import './Admin.css'
import { Link, NavLink } from 'react-router-dom';
import RegistrationList from '../RegistrationList/RegistrationList';

const Admin = () => {
    return (
        <div className='container d-flex flex-wrap pt-5'>  
            <div className="col-12 col-lg-3">
                <NavLink activeStyle={{color:"#0056BA"}}  className='AdminLink' to='/admin'><img style={{height:"30px",paddingRight:"10px"}} src='https://i.ibb.co/R7fkPQ4/users-alt-1.png' alt=""/> Volunteer registration list</NavLink> <br/>
                <NavLink activeStyle={{color:"#0056BA"}} className='AdminLink'  to='/event'><img style={{height:"30px",paddingRight:"10px"}} src='https://i.ibb.co/N72cqcT/plus-1.png' alt=""/> Add event</NavLink>
            </div>
            <div className="col-12 col-lg-9">  
                <RegistrationList/>
            </div>
        </div>
    );
};

export default Admin;