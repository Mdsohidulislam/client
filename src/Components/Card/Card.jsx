import React from 'react';
import { useHistory } from 'react-router-dom';
import { images } from '../../documents';
import './Card.css'

const Card = (props) => {
    const {img,info,id}=props;

    const history=useHistory();

    const goLink=(name)=>{
        history.push(`/registration/${name}`)
    }


    return (
        <div className='card m-2' onClick={()=>goLink(info)}>
            <img src={img} alt=""/> 
            <div className="info">{info}.</div>
        </div>
    );
};

export default Card;