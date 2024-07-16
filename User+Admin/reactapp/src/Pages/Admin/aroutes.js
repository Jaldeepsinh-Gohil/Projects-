import { Route, Routes } from "react-router-dom";
import Adashboard from "./adashboard";
import Userlist from "./userlist";
import Profile from "../profile";
const Aroutes = () =>{
    return(
        
            <Routes>
                <Route path = '/' element={<Adashboard/>}/>
                <Route path = 'adashboard' element={<Adashboard/>}/>
                <Route path = 'userlist' element  = {<Userlist/>}/>
                <Route path = 'aprofile' element  = {<Profile/>}/>
            </Routes>
        
    )
}
export default Aroutes;