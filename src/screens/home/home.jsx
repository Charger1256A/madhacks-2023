import MatchCard from "../../components/MatchCard";
import MovieCard from "../../components/MovieCard";
import UserCard from "../../components/UserCard";
import "./home.css";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";


const URL = "http://127.0.0.1:5000";

export default function Home(props) {
  const [id, setId] = useState(0);
  const [matchingUsers, setMatchingUsers] = useState([]);
  const [currMovie, setCurrMovie] = useState([]);
  const [matches, setMatches] = useState([])

  const logout = () => {
    axios.post(`${URL}/logout`)
      .then((response) => {
        localStorage.removeItem("user")
        props.onLogout();
        console.log(JSON.stringify(response.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const likedMovie = () => {
    axios.post(`${URL}/liked`, {
      movieId: currMovie[id].id,
      friends: matchingUsers,
      user: JSON.parse(localStorage.getItem("user")).user
    }).then((response) => {
        console.log(JSON.stringify(response.data));
    }).catch((err) => { alert(err.message) });  

   refreshMatches(null);
   setId(id + 1)
  }
// 8===========D 8====D 8===D 8==D 8=D 8D
  const refreshMatches = (updatedUsers) => {
    if (updatedUsers) {
        var lUsers = updatedUsers;
    } else {
        var lUsers = matchingUsers;
    }
    axios.post(`${URL}/getMatches`, {
        movieId: currMovie[id].id,
        friends: lUsers,
        user: JSON.parse(localStorage.getItem("user")).user
    })
      .then((response) => {
        console.log("teeeest")
        setMatches(response.data)
        console.log(JSON.stringify(response.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const updateMovie = (movie) => {
    console.log(movie);
    setCurrMovie(movie);
  }

  return (
    <main>
      <div className="movie-wrapper">
        <Button className = "logoutmove"onClick={() => logout()}>Logout</Button>


            <MovieCard count={id} updateMovie={(movie) => updateMovie(movie)} />
        
        
        <div>
          <Tooltip title="Dislike">
            <button
              className="redround"
              onClick={() => setId((prev) => prev + 1)}
            >
              👎
            </button>
          </Tooltip>
          <Tooltip title="Like">
            <button className="round" onClick={() => likedMovie()}>
              👍
            </button>
          </Tooltip>
        </div>
      </div>
      <div>
      <MatchCard matchingUsers={matchingUsers} setMatchingUsers={setMatchingUsers} refreshMatches={refreshMatches}/>
      <UserCard matches={matches}/>
      </div>
      
    </main>
  );
}
