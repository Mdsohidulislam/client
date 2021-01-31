import { logRoles } from '@testing-library/react';
import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { logoFooter } from '../Databese';
import {logos} from '../../documents'

import './Footer.css'
const Footer = () => {
    return (
    <div className='footer_container'>
        <div className="container d-flex justify-content-space-around  flex-wrap py-5">
            <div className="half col-12 col-md-4 col-lg-6 d-flex p-3 justify-content-md-start justify-content-center">
                {/* <NavLink to='/'><img src={logoFooter} alt=""/></NavLink> */}
                <img src={logos[1]} alt=""/>
            </div>
            <div className="infos col-12 col-md-4 col-lg-3 p-3">
                <p>About Volunteer network</p>
                <p>Read our blog</p>
                <p>Sign up to work</p>
                <p>Add your volunteer team</p>
            </div>
            <div className="contact col-12 col-md-4 col-lg-3  p-3">
                <p>Get help</p>
                <p>Read FAQs</p>
                <p>View all cities</p>
                <p>Volunteer network near me</p>
            </div>
        </div>
        <div className="footer container d-flex flex-wrap">
            <div className="copyright col-12 col-md-6">
                <p style={{color:'gray'}}>copyright©2020 Volunteer network.All right reserve.</p>
            </div>
            <div className="privacy col-12 col-md-6 d-flex justify-content-center">
                <p className='pl-3'>Privacy Policy</p>
                <p className='pl-3'>Terms of Use</p>
                <p className='pl-3'>Pricing</p>
            </div>
        </div>
    </div>
    );
};

export default Footer;