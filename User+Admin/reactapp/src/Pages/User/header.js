
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
const Header = () =>{
    return(
        <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6">User Dashboard</Typography>
        </Toolbar>
      </Container>
    </AppBar>
    )
}
export default Header;