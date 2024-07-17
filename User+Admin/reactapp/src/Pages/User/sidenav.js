import { Link } from "react-router-dom";
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const SideNav = () =>{
    const navigate = useNavigate();
    const logout = () => {
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