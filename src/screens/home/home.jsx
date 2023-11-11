import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Home() {
    return (
        <div className="container">
            <div className="header">
                <h1>Home</h1>
            </div>
            <div className="body">
                <div className="matcher">
                <TextField className="matcher" id="standard-basic" label="Enter Match ID" variant="standard" type="" />
                </div>
                <div className="movie">

                </div>
            </div>
        </div>
    )
}