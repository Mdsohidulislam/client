import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import UserVolunteer from '../UserVolunteer/UserVolunteer';

const User = () => {

    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [volunteer,setVolunteer]=useState([])

    useEffect(()=>{
        fetch(`https://gentle-hollows-19917.herokuapp.com/volunteers?email=${loggedInUser.email}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                authorization:`Honest ${sessionStorage.getItem('idToken')}`
            }
        })
        .then(res => res.json())
        .then(result => setVolunteer(result))

    },[])

    let count=0;

    return (
        <div className='container d-flex flex-wrap justify-content-around'>
            {
                volunteer.map(vl => <UserVolunteer key ={vl._id} id={vl._id} haveImg={vl.haveImg} email={vl.email} description={vl.work} idd={vl.id} date={vl.date}></UserVolunteer>)
            }
        </div>
    );
};

export default User;