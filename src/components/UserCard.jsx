import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function UserCard({ matches }) {
    
    const idToName = (movie_id) => {
        console.log(movie_id)
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json.results)
            return movie_id
            // return json.title;
        })
    }

    return (
    <Card>
        <CardContent>
            {Object.keys(matches).map((key, i) => (
                <Accordion key={i}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>{key}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {matches[key].map((item, i) => (
                        <Typography key={i}> {item}</Typography>
                    ))}
                </AccordionDetails>
            </Accordion>
            ))}
        </CardContent>
    </Card>
  )
}
