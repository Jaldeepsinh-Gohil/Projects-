import { useState, useEffect } from 'react';
import {
  Container, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper,
  Typography, 
} from '@mui/material';

const Userlist = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getusers')
        .then(response => response.json())
        .then(data =>{
            if(Array.isArray(data)){
                setUsers(data);
            }else{
                console.error('error fetching userdata:response is not array');
            }
        })  
        .catch(error => console.error('error fetching users data:',error));
    },[]);
    return(
        <Container>
      <Typography variant="h3" gutterBottom align="center">
        Userlist List
      </Typography>
      {/* <Button variant="contained" color="primary" onClick={() => setOpenAddDialog(true)}>
        Add Admin
      </Button>
      <Button variant="contained" color="secondary" onClick={() => setOpenRemoveDialog(true)}>
        Remove Admin
      </Button> */}
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
               {/*<TableCell>Actions</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                 <TableCell>{user.status}</TableCell>
                {/*<TableCell>
                  {admin.status === 'disabled' && (
                    <Button variant="contained" color="primary" onClick={() => enablebutton(admin)}>
                      Enable
                    </Button>
                  )}
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Admin Dialog */}
      {/* <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
        <DialogTitle>Add New Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the name of the new admin.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Admin Name"
            type="text"
            fullWidth
            value={newAdminName}
            onChange={(e) => setNewAdminName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddAdmin} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog> */}

      {/* Remove Admin Dialog */}
      {/* <Dialog open={openRemoveDialog} onClose={() => setOpenRemoveDialog(false)}>
        <DialogTitle>Remove Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please select the admin to remove.
          </DialogContentText>
          <Table>
            <TableBody>
              {admins.map((admin) => (
                <TableRow
                  key={admin.id}
                  onClick={() => setAdminToRemove(admin)}
                  selected={adminToRemove && adminToRemove.id === admin.id}
                >
                  <TableCell>{admin.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenRemoveDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRemoveAdmin} color="primary" disabled={!adminToRemove}>
            Remove
          </Button>
        </DialogActions>
      </Dialog> */}

      {/* Enable Admin Dialog */}
      {/* <Dialog open={openEnableDialog} onClose={() => setOpenEnableDialog(false)}>
        <DialogTitle>Enable Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Admin "{adminToEnable && adminToEnable.name}" is disabled. Do you want to enable it?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEnableDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEnableAdmin} color="primary">
            Enable
          </Button>
        </DialogActions>
      </Dialog> */}
    </Container>
    )
}
export default Userlist;