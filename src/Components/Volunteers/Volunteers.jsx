import React, { useEffect, useState } from 'react';
import { documents, images } from '../../documents';
import Card from '../Card/Card';

const Volunteers = () => {
    
    const [volunteer,setVolunteer]=useState([])

    useEffect(()=>{
        fetch('https://gentle-hollows-19917.herokuapp.com/works')
        .then(res => res.json())
        .then(result => setVolunteer(result))
    },[])

    return (
        <div className='container d-flex flex-wrap justify-content-around' style={{maxWidth:'900px'}}>  
                {
                    volunteer.map(vl => <Card key={vl._id} img={vl.img} info={vl.info} id={vl.id}></Card>)
                }
        </div>
    );
};

export default Volunteers;