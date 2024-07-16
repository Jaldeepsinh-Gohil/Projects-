import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../components/auth";

const SideNav = () =>{
    const {logout}= useContext(AuthContext);
    return(
        <>
        <ul>
            <Link to = '/userhomepage/dashboard'><li>Dashboard</li></Link>
            <Link to = '/userhomepage/profile'><li>Profilepage</li></Link>
            <Link onClick={logout}><li>Logout</li></Link>
        </ul>
        </>
    )
} 
export default SideNav;