import MovieCard from "../../components/MovieCard";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="movie-wrapper">
        <button>No</button>
        <MovieCard />
        <button>Yes</button>
      </div>
    </>
  );
}
