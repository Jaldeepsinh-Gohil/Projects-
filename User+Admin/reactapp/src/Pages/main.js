import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignIn from "./signin";
import SignUp from "./signup";
const Main = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element ={<SignIn/>} />
                <Route path="/signin" element ={<SignIn/>}/>
                <Route path="/signup" element ={<SignUp/>}/> 
            </Routes>
        </Router>
    )
}
export default Main;