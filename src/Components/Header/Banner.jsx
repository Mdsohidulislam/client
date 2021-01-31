import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css'

const Banner = () => {

    const history=useHistory();

    const goLink=(link)=>{
        history.push(link)
    }

    return (
        <div className='headerContainer'>
            <div className="search"> 
                    <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dm9sdW50ZWVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <div className='h5 text-center'>
                        <h4 className='headerTitle'>I GROW BY HELPING PEOPLE IN NEED</h4>
                            <span className='borders'><input type="text" placeholder='Search......' className='headerSearch'/></span>
                            <button onClick={()=>goLink('/login')} className='headerSearchBtn'>Search</button>
                    </div>
                </div>
        </div>
    );
};

export default Banner;