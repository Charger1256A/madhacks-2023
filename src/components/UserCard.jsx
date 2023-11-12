import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './usercard.css';


export default function UserCard({ matches }) {
    const [value, setValue] = useState(matches);

    useEffect(() => {
        console.log(matches);
        setValue(matches);
    }, [matches]);

    return (
    <Card sx={{minWidth: 500, paddingLeft: 3, paddingTop: 1}}>
        <h1>Matches</h1>
        <CardContent>
            {Object.keys(value).map((key, i) => (
                <Accordion key={i}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>{key}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {value[key].map((item, i) => (
                        i < 20 && <Typography key={i}> {i + 1}. {item}</Typography>
                    ))}
                </AccordionDetails>
            </Accordion>
            ))}
        </CardContent>
    </Card>
  )
}
