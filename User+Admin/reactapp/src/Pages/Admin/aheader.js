
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
const Aheader = () =>{
    return(
        <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6">Admin Dashboard</Typography>
        </Toolbar>
      </Container>
    </AppBar>
    )
}
export default Aheader;