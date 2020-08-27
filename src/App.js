import React, {useEffect} from "react";
// import logo from './logo.svg';
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import {useStateValue} from "./StateProvider"
import Login from "./Login"
import { auth } from "./firebase";

function App() {

  const [dispatch]= useStateValue()

  useEffect(()=>{

    const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){ //if user is logged in

        dispatch({
          type:"SET_USER",
          user:authUser,
        });

      } 

      else{ //if user is logged out
      
        dispatch({
          type:"SET_USER",
          user:null,
        });

      }

    });

    return () => {
      //for cleanup
      unsubscribe();  
    }



  },[]);

  return (
    <Router>    
      <div className="app">
      <Switch>
        <Route path = "/checkout">
        <Header/>  

          <Checkout/>
        </Route>

        <Route path = "/login">
          <Login/>
        </Route>

        <Route path = "/">
          {/* Separate components for header i.e navbar, and the home i.e the dashboard */}
          <Header/>  
          <Home/>
        </Route>
        
        </Switch>
      </div>  
     </Router>

  );
}
// the use of react router for routes
export default App;
