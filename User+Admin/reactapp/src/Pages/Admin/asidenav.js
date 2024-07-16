import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../components/auth";

const AsideNav = () =>{
    const {logout} = useContext(AuthContext);
    return(
        <>
        <ul>
            <Link to = '/adminhomepage/adashboard'><li>Dashboard</li></Link>
            <Link to = '/adminhomepage/aprofile'><li>Profilepage</li></Link>
            <Link to = '/adminhomepage/userlist'><li>Userlist</li></Link>
            <Link onClick={logout}><li>Logout</li></Link>
        </ul>
        </>
    )
} 
export default AsideNav;