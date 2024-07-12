import { Link } from "react-router-dom"

const SideNav = () =>{
    return(
        <>
        <ul>
            <Link to = '/dashboard'><li>Dashboard</li></Link>
            <Link to = '/profile'><li>Profilepage</li></Link>
            <Link to = '/userlist'><li>Userlist</li></Link>
            <Link to = '/logout'><li>Logout</li></Link>
        </ul>
        </>
    )
} 
export default SideNav;