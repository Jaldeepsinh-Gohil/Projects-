import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { List, ListItemButton, ListItemText } from '@mui/material';
import Swal from "sweetalert2";
const AsideNav = () =>{
    const navigate = useNavigate();
    const logout = () => {
        Swal.fire({
            title: "Logged out Successfully",
            text: "You clicked the button!",
            icon: "success"
          });
        localStorage.removeItem('token');
        return navigate('/');
    };
    return(
        <List>
      <ListItemButton component={Link} to ='/adminhomepage/adashboard'>
      <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component ={Link} to = '/adminhomepage/aprofile'>
      <ListItemText primary="Profilepage" />
      </ListItemButton>
      <ListItemButton compnent = {Link} to = '/adminhomepage/userlist'>
      <ListItemText primary="Userlist"/>
      </ListItemButton>
      <ListItemButton onClick={logout}>
     <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
    )
} 
export default AsideNav;