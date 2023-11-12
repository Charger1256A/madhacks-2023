import * as React from "react";
import {
  Card,
  IconButton,
  Box,
  CardContent,
  Chip,
  Avatar,
  Tooltip,
  Dialog,
  Button,
  TextField,
  DialogContentText,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://127.0.0.1:5000";

export default function MatchCard(props) {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addFriend = () => {
    axios.post(`${URL}/match`, {
      friend: username,
      friends: props.matchingUsers
    }).then((response) => {
      var localMatchingUsers = JSON.parse(JSON.stringify(props.matchingUsers));
      localMatchingUsers.push({id: response.data.id, name: response.data.friend});
      console.log(localMatchingUsers);
      props.setMatchingUsers(localMatchingUsers);
      console.log(JSON.stringify(response.data));
      props.refreshMatches(localMatchingUsers);
    }).catch((err) => alert(JSON.stringify(err.message)));
    setOpen(false);
    
  }

  

  const handleDelete = (id) => {
    props.setMatchingUsers(props.matchingUsers.filter((item) => item.id !== id));
    props.refreshMatches(props.matchingUsers.filter((item) => item.id !== id));
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add the user(s) you want to match with
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="name"
            fullWidth
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => addFriend()}>Add</Button>
        </DialogActions>
      </Dialog>
      <Card
        sx={{
          marginBottom: "2rem",
          minWidth: 500,
          maxHeight: 512,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <CardContent>
          <h1>Friends</h1>
          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            
            <Tooltip title="Add user">
              <IconButton aria-label="add">
                <AddBoxTwoToneIcon fontSize="large" onClick={handleClickOpen} />
              </IconButton>
            </Tooltip>
            {props.matchingUsers && props.matchingUsers.map((user) => (
              <Chip
                key={user.id}
                avatar={<Avatar>{user.name.slice(0, 2)}</Avatar>}
                label={user.name}
                onDelete={() => handleDelete(user.id)}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
