import { Link } from "react-router-dom";
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const SideNav = () =>{
    const navigate = useNavigate();
    const logout = () => {
        Swal.fire({
            title: "Logged out Successfully",
            text: "You clicked the button!",
            icon: "success"
          });
        localStorage.removeItem('token');
        navigate('/signin');
    };
    return(
        <List>
      <ListItemButton component={Link} to ='/userhomepage/dashboard'>
      <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component ={Link} to = '/userhomepage/profile'>
      <ListItemText primary="Profilepage" />
      </ListItemButton>
      <ListItemButton onClick={logout}>
      <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
    )
} 
export default SideNav;