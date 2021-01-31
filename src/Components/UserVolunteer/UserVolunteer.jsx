import React, { useEffect, useState } from 'react';
import { information } from '../../documents';

const UserVolunteer = (props) => {

    const {date,description,id,haveImg}=props;

    const [volunteer,setVolunteer]=useState([])

    let img=[];
    if(haveImg){
        img=[{img:'https://c0.wallpaperflare.com/preview/740/729/209/back-blue-daytime-environment.jpg'}]
    }else{
        img=information.filter(infos => infos.info == description )
    }

    useEffect(()=>{
        fetch('https://gentle-hollows-19917.herokuapp.com/works')
        .then(res => res.json())
        .then(result => setVolunteer(result))
    },[])


    const deleteOne=(id)=>{
            fetch(`https://gentle-hollows-19917.herokuapp.com/delete/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(result =>{
                document.getElementById(`${id}`).style.display='none'
            }) 

            
    }



    


    return (
                <div id={`${id}`} style={volunteerCartStyle} className='shadow my-3 rounded'>
                    <div style={volunteerCartImgDiv} className="bg-white">
                        <img style={imgStyle} src={`${img[0].img}`} alt=""/>
                    </div>
                    <div style={volunteerCartInfoDiv}>
                        <h5><b>{description}</b></h5>
                        <p><b>{date}</b></p>
                        <button style={volunteerCartBtn} onClick={()=>deleteOne(id)} className='btn btn-danger'>CANCEL</button>
                    </div>
                </div>
    );
};

export default UserVolunteer;


const volunteerCartBtn={
    position:'absolute',
    bottom:'25px',
    right:'25px'
}

const imgStyle={ 
    height:'150px',
    width:'100%',
}

const volunteerCartStyle={
    maxWidth:'450px',
    height:'200px', 
    padding:'25px', 
    display:'flex', 
    position:'relative',
    background:'white'
}

const volunteerCartImgDiv={ 
    width:'30%'
}
const volunteerCartInfoDiv={ 
    width:'70%',
    paddingLeft:'25px'

}