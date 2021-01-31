import React, { useContext, useState } from 'react';
import '../Admin/Admin.css'
import { Link, NavLink } from 'react-router-dom';  
import { useForm } from "react-hook-form";  
import { UserContext } from '../../App';


const Event = () => {



    // {"_id":{"$oid":"6015836bde8d8b00155847f4"},"name":"Md Sohidul Islam","email":"mdsohidulislam808808808@gmail.com","date":"2021-01-31T22:03","description":"asdfasdfasdf","work":"Collect stuffed animals"}

    const [event,setEvent]=useState({})
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
        fetch('https://gentle-hollows-19917.herokuapp.com/addEvent',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:loggedInUser.displayName,
                email:loggedInUser.email,
                date:data.date,
                description:data.description,
                work:data.eventTitle,
                haveImg:true
            })
        })
        .then(res => res.json())
        .then(result =>alert('done!'))
    }

    return (
        <div className='container d-flex flex-wrap pt-5'>  
            <div className="col-12 col-lg-3">
                <NavLink activeStyle={{color:"#0056BA"}}  className='AdminLink' to='/admin'><img style={{height:"30px",paddingRight:"10px"}} src='https://i.ibb.co/R7fkPQ4/users-alt-1.png' alt=""/> Volunteer registration list</NavLink> <br/>
                <NavLink activeStyle={{color:"#0056BA"}} className='AdminLink'  to='/event'><img style={{height:"30px",paddingRight:"10px"}} src='https://i.ibb.co/N72cqcT/plus-1.png' alt=""/> Add event</NavLink>
            </div>
            <div className="col-12 col-lg-9">
                
                <form className='shadow p-3 bg-white rounded' onSubmit={handleSubmit(onSubmit)}> 
 
                    <input name="eventTitle" className='form-control' placeholder='Enter your event title' ref={register({ required: true })} />
                    {errors.eventTitle && <span className='text-danger'>This field event title required</span>} <br/>

                    <input name="description" className='form-control' placeholder='Enter your event description' ref={register({ required: true })} />
                    {errors.description && <span className='text-danger'>This field event description required</span>} <br/>

                    <input name="date"  type="datetime-local" className='form-control' placeholder='Select your event date' ref={register({ required: true })} />
                    {errors.date && <span className='text-danger'>This field event date required</span>} <br/>
                    
                    <input name="img" defaultValue='https://c0.wallpaperflare.com/preview/740/729/209/back-blue-daytime-environment.jpg' className='form-control' placeholder='Paste your event image url' ref={register({ required: true })} />
                    {errors.img && <span className='text-danger'>This field event img url required</span>} <br/>
                
                <input className='btn btn-info' type="submit" />

                </form>  
            </div>
        </div>
    );
};

export default Event;