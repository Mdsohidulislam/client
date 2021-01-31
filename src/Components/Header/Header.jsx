import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import './Header.css';
import { logos } from '../../documents';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';


const Header = () => {

    const history=useHistory();

    const GoLink=()=>{
        history('http://localhost:4003/man')
    }

    const [loggedInUser,setLoggedInUser]=useContext(UserContext);


    return (
        <div className='headerContainer'>
                
                <Navbar bg="light" expand="lg">
                <Navbar.Brand><Link to='/'><img style={{height:'40px',cursor:'pointer'}} src={logos[1]} alt=""/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ml-auto'> 
                        <Nav.Link to='/'><Link className='Link' to='/'>Home</Link></Nav.Link>
                        <Nav.Link href="#home">Donation</Nav.Link>
                        <Nav.Link onClick={()=>GoLink}>Event</Nav.Link>
                        <Nav.Link href="#home">Blog</Nav.Link>  
                        <Link to='/'><div className='over'><button className='hBtn registration'>Registration</button></div></Link>
                        {
                            loggedInUser.logIn && <> <div className="m-1"></div>
                            <Link to='/user'><div className='over'><button className='hBtn admin'>{loggedInUser.displayName||`${loggedInUser.email.slice(0,10)}....`}</button></div></Link></>
                        }
                        <div className="m-1"></div>
                        <Link to='/admin'><div className='over'><button className='hBtn admin'>Admin</button></div></Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    );
};

export default Header;