import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Profile from "../profile";

const URoutes = () =>{
    return(
        
            <Routes>
                <Route path = '/' element={<Dashboard/>}/>
                <Route path = 'dashboard' element={<Dashboard/>}/>
                <Route path = 'profile' element  = {<Profile/>}/>
            </Routes>
        
    )
}
export default URoutes;