import React from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import Logo from '../../images/logos/logo.png';
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider()

    const handleGoogle = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res =>{
            console.log(res);
        }

        ).catch(error => {
            console.log(error.message);
        });
    }
  
    return (
       
           <div className="login-backGround">
               <div className="login-header">
                   <img style={{width: '15%'}} src={Logo} alt=""/>

               </div>
           <div className="login-area">
                <div className="login-section">
                    <h1>Login With </h1>
                    <br/>
                    <div className="google" >
                    <i style ={{color : 'blue' , fontSize:'24px', marginTop: '10px'}} class="fa fa-google"></i>
                    <span> 
                        <button style={{ border: 'none', backgroundColor:'white',color:'black' }} onClick={handleGoogle}>Continue With Google</button>  </span>
                    </div>
                    <p>Don't have an account? <span><a href="/#">Create an account</a></span></p>
                   
                </div>
            </div>
           </div>
       
    );
};

export default Login;