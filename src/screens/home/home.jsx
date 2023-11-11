import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card  from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Match from "../../components/match"


export default function Home() {
    return (
        <div className="container">
            <div className="header">
                <h1>Home</h1>
            </div>
            <div className="body">
                <div className="matcher">
                <h1>Match</h1>
                <Match/>
                </div>
                <div className="Movie">

                </div>
            </div>
        </div>
    )
}