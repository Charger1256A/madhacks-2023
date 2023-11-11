import { useState, useEffect } from "react";
import { Card, CardMedia, Box, Typography, CardContent } from "@mui/material";

export default function MovieCard() {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=1f76485a9e2d7d401645b6da498786ae"
    )
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  }, []);

  return (
    <Card sx={{ maxWidth: 500 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movies[count]?.original_title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movies[count]?.year}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 64 * 5 }}
        image={"https://image.tmdb.org/t/p/w500/" + movies[count]?.poster_path}
        alt="Live from space album cover"
      />
    </Card>
  );
}
