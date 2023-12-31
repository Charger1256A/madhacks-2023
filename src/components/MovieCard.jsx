import { useState, useEffect } from "react";
import { Card, CardMedia, Box, Typography, CardContent, Chip } from "@mui/material";
import './moviecard.css'

export default function MovieCard({ count, updateMovie }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=1f76485a9e2d7d401645b6da498786ae"
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        updateMovie(json.results)
      })
     
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=1f76485a9e2d7d401645b6da498786ae"
    )
      .then((res) => res.json())
      .then((json) => setGenres(json.genres));
  }, []);

// if (movies[count]?.vote_average >= 7){
//   setMovieLabel(movies[count]?.vote_average + "/10 🔥")
// } else if (movies[count]?.vote_average < 7 && movies[count]?.vote_average >= 7 ) {
//   setMovieLabel(movies[count]?.vote_average + "/10 🥱")
// } else (
//   setMovieLabel(movies[count]?.vote_average + "/10 💩")
// )
  

  const movieGenre = movies[count]?.genre_ids;
  const genresName = genres.filter((item) => item.id === movieGenre[0]);
  
  return (
    <Card
      sx={{
        maxWidth: 700,
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      }} 
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{padding: "1rem"}}>
          <Typography component="div" variant="h5">
            {movies[count]?.original_title}
          </Typography>
          <Typography  sx={{marginTop: 1}} component="div" variant="subtitle2">
            {movies[count]?.release_date.slice(0, 4)}
            {movies[count]?.vote_average >= 7 && (
              <Chip sx={{marginLeft: 1}} label={(movies[count]?.vote_average + "/10") + " 🔥"} variant="outlined" />
            )}
            {(movies[count]?.vote_average < 7 && movies[count]?.vote_average >= 5) && (
              <Chip sx={{marginLeft: 1}} label={(movies[count]?.vote_average + "/10") + " 🥱"} variant="outlined" />
            )}
            {movies[count]?.vote_average < 5 && (
              <Chip sx={{marginLeft: 1}} label={(movies[count]?.vote_average + "/10") + " 💩"} variant="outlined" />
            )}
            <Chip sx={{marginLeft: 1}} label={genresName[0]?.name} variant="outlined" />
          </Typography>
          <Typography component="div" variant="body1">
            {movies[count]?.overview}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ height: 512 }}
        image={"https://image.tmdb.org/t/p/w500/" + movies[count]?.poster_path}
        alt="Live from space album cover"
      />
    </Card>
  );
}