
import React,{useState} from 'react'
import "./Login.css"
import {useStateValue} from "./StateProvider"
import {Link,useHistory} from "react-router-dom"
import {auth} from "./firebase";

function Login() {

    const history = useHistory();
   
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const login = event =>{

        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push("/");

            })
            .catch((e)=> alert(e.message));
    
        }

    const register = (event) =>{

        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{

            history.push("/")

        })
        .catch((e)=> alert(e.message));


    }


    return (
        <div className="login">
            
            <Link to="/">
             <img
               className="login_logo"
               src="" 
               alt=""
                />
            
            </Link>

            <div className="login_container">

                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} 
                    id="email" type="email"/>
                    <h5>Password</h5>
                    <input value={password} id= "password" onChange={event => setPassword(event.target.value)} type="password"/>
                   
                    <button onClick={login} type="submit" id="sign_in_button">Sign In</button>
                
                </form>

                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register}   id="create_button">Create your Amazon Account</button>
                    
            </div>




        </div>
    )
}


export default Login;
