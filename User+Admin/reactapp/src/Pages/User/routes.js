import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./dashboard";

const Routes = () =>{
    return(
        <Router>
            <Routes>
                <Route path = '/dashboard' element={<Dashboard/>}/>
                <Route path = '/userlist'/>
            </Routes>
        </Router>
    )
}