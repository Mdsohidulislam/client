    import React, { useContext } from "react";
    import { useForm } from "react-hook-form";
import {logos } from "../../documents";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";

    export default function RegistrationForm() {


        const [loggedInUser,setLoggedInUser]=useContext(UserContext)

        const {name}=useParams() 

    const { register, handleSubmit, watch, errors } = useForm();

    // send info server

    const onSubmit = data => {

        fetch('https://gentle-hollows-19917.herokuapp.com/userWork',{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify({
                name:data.name,
                email:data.email,
                description:data.description,
                work:data.work,
                haveImg:false
            })
        })
        .then(res => res.json())
        .then(result => alert('done'))
        .catch(err => alert(err))
    };

    return (
        <div style={{maxWidth:'450px',margin:"50px auto"}} className='p-3'>
        
        <div className="text-center">
            <img src={logos[1]} style={{height:'40px'}} className='mb-5 text-center' alt=""/>
        </div>


        <form className='shadow p-3 bg-white rounded' onSubmit={handleSubmit(onSubmit)}> 

            <input name="name" defaultValue={`${loggedInUser.displayName ||loggedInUser.email.slice(0,15)}`} className="form-control" placeholder="Enter your name..............." ref={register({ required: true })} />  
            {errors.name && <span className='text-danger'>This field name required</span>} <br/>

            <input name="email" defaultValue={`${loggedInUser.email}`} className="form-control" placeholder="Enter your email or username..............." ref={register({ required: true })} />  
            {errors.email && <span className='text-danger'>This field email  or description required</span>} <br/>

            <input name="date" type="datetime-local" className="form-control" placeholder="Enter date..............." ref={register({ required: true })} />  
            {errors.date && <span className='text-danger'>This field date required</span>} <br/>

            <textarea name="description" rows='3' className="form-control" placeholder="Enter your description..............." ref={register({ required: true })} />  
            {errors.description && <span className='text-danger'>This field description required</span>} <br/>

            <input name="work" defaultValue={name} className="form-control" placeholder="Enter your work..............." ref={register({ required: true })} />  
            {errors.work && <span className='text-danger'>This field work required</span>} <br/>
        
            <input type="submit" value="Registration" className='btn btn-info' />
        </form>  
        </div> 

    );
    }