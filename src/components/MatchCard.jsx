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
import { useState } from "react";

export default function MatchCard() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [matchingUsers, setMatchingUsers] = useState([
    { id: 1, name: "Chaand" },
    { id: 2, name: "Ritesh" },
  ]);

  const handleDelete = (id) => {
    setMatchingUsers(matchingUsers.filter((item) => item.id !== id));
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
      <Card
        sx={{
          marginLeft: "4rem",
          minWidth: 300,
          maxHeight: 512,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <Tooltip title="Add user">
              <IconButton aria-label="add">
                <AddBoxTwoToneIcon fontSize="large" onClick={handleClickOpen} />
              </IconButton>
            </Tooltip>
            {matchingUsers.map((user) => (
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
