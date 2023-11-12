import MatchCard from "../../components/MatchCard";
import MovieCard from "../../components/MovieCard";
import "./home.css";
import { Tooltip } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState(0);
  return (
    <main>
      <div className="movie-wrapper">
        <MovieCard count={id} />
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
            <button className="round" onClick={() => setId((prev) => prev + 1)}>
              👍
            </button>
          </Tooltip>
        </div>
      </div>
      <MatchCard />
    </main>
  );
}
