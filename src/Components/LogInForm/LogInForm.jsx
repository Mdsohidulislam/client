// import React, { useContext, useState } from 'react';
// import '../../App.css' 
// import { UserContext } from '../../App';
// import { handleGoogleSingIN } from './GoogleSingIn';
// import { handleFacebookSignIn } from './FacebookSignIn';
// import { Redirect, useHistory, useLocation } from 'react-router-dom';
// import { handleSignIn } from './LogInEmail&Password';
// import {handleCreateAccount} from './CreateAccount'

// const LogInForm = () => {

//     const [haveAccount,setHaveAccount]=useState(false)
//     const [loggedInUser,setLoggedInUser]=useContext(UserContext) 

//     const googleSignIn=()=>{ 
//         handleGoogleSingIN().then(res=>{
//           Minify(res,true)
//         }) 
//     }        

//     const facebookSignIn=()=>{
//         handleFacebookSignIn().then(res=>{ 
//           Minify(res,true)
//         })
//     }
 
//     const SignIn=(event)=>{
//       event.preventDefault();
//       const password=document.getElementById('password').value;
//       const email=document.getElementById('email').value;
//       handleSignIn(email,password).then(res=>{
//         Minify(res,true)
//       }) 
//     }

//     const createAccount=(event)=>{
//       event.preventDefault();
//       const password=document.getElementById('passwordC').value;
//       const email=document.getElementById('emailC').value;
//       const name=document.getElementById('name').value;
//       const photo=document.getElementById('photo').value;

//       handleCreateAccount(email,password,name,photo).then(res=>{
//           Minify(res,true) 
//         // }  
//       })


//     }

//     let history = useHistory();
//     let location = useLocation(); 
  
//     let { from } = location.state || { from: { pathname: "/" } };

//     const Minify=(res,redirect)=>{
//         setLoggedInUser(res)

//       if(redirect){
//         history.replace(from);
//       }
//     }

//   return (
//     <div className='mx-auto my-3' style={{width:'400px'}}>
//         <button onClick={googleSignIn} className='btn btn-outline-success btn-block'>Log in via GOOGLE</button>
//         <button onClick={facebookSignIn} className='btn btn-outline-success btn-block'>Log in via FACEBOOK</button>
//         <br/>
//         {
//           haveAccount ?

//           <form>
//             <h4 className='text-info'>LOG IN.........</h4> 
//             <input type="text" className="form-control" placeholder='Enter your email address....' id='email' type='email'/><br/>
//             <input type="text" className="form-control" placeholder='Enter your enter your password....' id='password' type='password'/><br/>
//             <button type='submit' onClick={SignIn} className='btn btn-success btn-block'>LOG IN</button> 
//           </form>  : 
                  
//                   <form>
//                     <h4 className='text-info'>CREATE AN ACCOUNT.........</h4>
//                     <input type="text" className="form-control" placeholder='Enter your name....' id='name' type="name"/><br/>
//                     <input type="text" className="form-control" placeholder='Paste here your profile photo url....' id='photo' type="url"/><br/>
//                     <input type="text" className="form-control" placeholder='Enter your email address....' id='emailC' type='email'/><br/>
//                     <input type="text" className="form-control" placeholder='Enter your enter your password....' id='passwordC' type="password"/><br/>
//                     <button onClick={createAccount} type='submit' className='btn btn-success btn-block'>CREATE AN ACCOUNT</button> 
//                   </form> 
//         }

//         <small onClick={()=>setHaveAccount(!haveAccount)} className='smallStyle'>{haveAccount ? 'create a new account' : 'already have an account'}</small>


//     </div>
//   );
// };

// export default LogInForm;





import React, { useContext, useState } from 'react';
import './Form.css' 
import fb from './fb.png'
import google from './google.png'   
import { useForm } from 'react-hook-form'; 
import { UserContext } from '../../App';
import { handleGoogleSingIN } from './GoogleSingIn';
import { handleFacebookSignIn } from './FacebookSignIn';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { handleSignIn } from './LogInEmail&Password';
import {handleCreateAccount} from './CreateAccount'

const LogInForm = () => {

    const [loggedInUser,setLoggedInUser]=useContext(UserContext) 

    const googleSignIn=()=>{ 
        handleGoogleSingIN().then(res=>{
          Minify(res,true)
        }) 
    }        

    const facebookSignIn=()=>{
        handleFacebookSignIn().then(res=>{ 
          Minify(res,true)
        })
    }
 
    const SignIn=(event)=>{
      event.preventDefault();
      const password=document.getElementById('password').value;
      const email=document.getElementById('email').value;
      handleSignIn(email,password).then(res=>{
        Minify(res,true)
      }) 
    }

    let history = useHistory();
    let location = useLocation(); 
  
    let { from } = location.state || { from: { pathname: "/" } };

    const Minify=(res,redirect)=>{
        setLoggedInUser(res)

      if(redirect){
        history.replace(from);
      }
    }


    const { register, handleSubmit, watch, errors } = useForm();
    // create account area
    const onSubmit = data => {
      const {name,email,password,ConfirmPassword,imageURL}=data; 

      if(password == ConfirmPassword){
        
        handleCreateAccount(email,password,name,imageURL).then(res=>{
          Minify(res,true)  
        // }  
      })

      }else{
        alert('Please match your password')
      }
      
    }   


    const [account,setAccount]=useState(false)


    return (
            <div className="col-10 col-md-4 mx-auto my-5 rounded shadow-lg p-3">
                {
                    account ? 
                    <div className="log-create-area p-1">
                    <form className='' onSubmit={handleSubmit(onSubmit)}> 
                        <h4 className='py-4'>Create an Account........</h4>
                        <input name="name" className="form-control" placeholder="Enter your name..............." ref={register({ required: true })} />  
                        {errors.name && <span className='text-danger'>This field name required</span>} <br/>

                        <input name="email" className="form-control" placeholder="Enter your email or username..............." ref={register({ required: true })} />  
                        {errors.email && <span className='text-danger'>This field email  or description required</span>} <br/>

                        <input name="imageURL" className="form-control" placeholder="Enter your profile image url optional..............." ref={register({ required: true })}/>  <br/>


                        <input name="password" type='password' className="form-control" placeholder="Enter your password..............." ref={register({ required: true })} />  
                        {errors.password && <span className='text-danger'>This field password required</span>} <br/>
                    
                        <input name="ConfirmPassword" type='password' className="form-control" placeholder="Enter your password..............." ref={register({ required: true })} />  
                        {errors.ConfirmPassword && <span className='text-danger'>This field confirm password required</span>} <br/>

                        <input type="submit" value="Create an account" className='btn btn-info' />
                    </form>  
                </div>

                    :

                <div className="logIn text-center">
                    <h4 className='py-1'>Login with</h4>
                    <div className="fb-google-area">
                        <p onClick={facebookSignIn}><img src={fb} alt=""/> Continue with Facebook</p>
                        <p  onClick={googleSignIn}><img src={google} alt=""/> Continue with Google</p>
                    </div>    
                    <div className="or-area">
                        <div className='or_div'></div>
                        <div className='or'>Or</div>
                    </div>   
                    <form onSubmit={SignIn}> 
                        <h4 className='py-4 text-center'>login</h4>

                        <input name="email" id='email'  className="form-control" placeholder="Enter your email or username..............." /> <br/>

                        <input name="password" id='password' type='password' className="form-control" placeholder="Enter your password..............." /> <br/>
                    
                        <input type="submit" value="login" className='btn btn-info' />
                    </form>  
                </div>

                }

                    <div className="require">  
                        <p className='p-2'>{account ? "have an account ?" :"Don't have an account ?"}   <button onClick={()=>setAccount(!account)}>{account? "login" : "Create an account"}</button></p>
                    </div>
            </div>
    );
};

export default LogInForm;