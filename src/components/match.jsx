import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function Match() {
  return (
    <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
          Match ID
        </Typography>
        <TextField
          className="matcher"
          id="input-with-sx"
          label="Enter Match ID"
          variant="standard"
        />
      </CardContent>
      <CardActions>
        <Button size="large">Submit</Button>
      </CardActions>
    </Card>
  );
}
