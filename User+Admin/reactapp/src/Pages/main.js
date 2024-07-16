
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignIn from "./signin";
import SignUp from "./signup";
import UserHP from "./User/userhp";
import AdminHP from "./Admin/adminhp";
import { AuthProvider } from "../components/auth";
import PR from "../components/protectedroute";
const Main = () =>{
    return(
        <AuthProvider>
        <Router>
            <Routes>
                <Route path="/" element ={<SignIn/>} />
                <Route path="/signin" element ={<SignIn/>}/>
                <Route path="/signup" element ={<SignUp/>}/> 
                <Route path="/userhomepage/*" element={<PR requiredRole='disabled'><UserHP/></PR>}/>
                <Route path="/adminhomepage/*" element={<PR requiredRole='active'><AdminHP/></PR>}/>
            </Routes>
        </Router>
        </AuthProvider>
    )
}
export default Main;