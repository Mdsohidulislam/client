import React, { useContext, useEffect, useState } from 'react'; 
import { UserContext } from '../../App';
import './Table.css'

const RegistrationList = () => {

    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const [volunteers,setVolunteers]=useState([])

    useEffect(()=>{
        fetch(`https://gentle-hollows-19917.herokuapp.com/allWorks?email=${loggedInUser.email}`,{
            method:'GET',
            headers:{
                "Content-Type" : "application/json",
                authorization:`Honest ${sessionStorage.getItem('idToken')}`
            }
        })
        .then(res => res.json())
        .then(result => setVolunteers(result))
    },[])

    const deleteData= (id) => {
        fetch(`https://gentle-hollows-19917.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            document.getElementById(`${id}`).style.display='none'
        }) 
    }

    return (
        <table className="table shadow" style={{backgroundColor:"white"}}>
            <thead>
                <tr style={{backgroundColor:'#F0F2F5'}}>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Registration date</th>
                    <th>Volunteer List</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    volunteers.map(vl => 
                    <tr id={vl._id} key={vl._id}>
                        <td><small>{vl.name}</small></td>
                        <td><small>{vl.email}</small></td>
                        <td><small>{vl.date}</small></td>
                        <td><small>{vl.description}</small></td>
                        <td ><img onClick={()=> deleteData(vl._id)} style={{height:"30px",borderRadius:'5px',cursor:'pointer',backgroundColor:"tomato",padding:'5px'}} src='https://i.ibb.co/HdswRnh/trash-2-9.png' alt=""/></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default RegistrationList;