import React, { useEffect, useState } from "react";
import axios from "../../../axios";
const base_url = "https://image.tmdb.org/t/p/original/";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        setErrorMessage("");
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrorMessage("Failed to fetch movies. Please try again later.");
      }
    }
    fetchData();
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const movieName = movie?.title || "";
      movieTrailer(movieName)
        .then((url) => {
          if (!url) {
            console.error("No URL returned for trailer");
            setErrorMessage("Trailer not found.");
            return;
          }

          try {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
            setErrorMessage("");
          } catch (error) {
            console.error("Invalid URL:", error);
            setErrorMessage("Error parsing trailer URL.");
          }
        })
        .catch((error) => {
          console.error("Error fetching trailer:", error);
          setErrorMessage("Error fetching trailer.");
        });
    }
  };

  return (
    <div className="relative mx-3">
      <h2 className="text-white font-bold">{title}</h2>
      <div className="flex p-5 hide-scrollbar overflow-y-hidden overflow-x-scroll space-x-2">
        {movies.length === 0 && !errorMessage ? (
          <p className="text-white">No movies available.</p>
        ) : (
          movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`transition-transform duration-300 transform hover:scale-105
                ${isLargeRow ? "w-auto h-40" : "w-auto h-24"}
                object-cover rounded-md`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "path_to_default_image.jpg";
              }}
            />
          ))
        )}
      </div>
      {trailerUrl && (
        <Youtube videoId={trailerUrl} opts={opts} className="w-full" />
      )}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default Row;
