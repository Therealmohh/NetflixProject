import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import requests from "../../../requests";
import "./Banner.scss";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false); // Ensure loading is set to false even on error
      }
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner text-white h-96 relative"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents h-full p-5 md:p-20 flex flex-col justify-end">
        <h1 className="banner_title text-3xl md:text-5xl font-bold pb-2">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <div className="banner_description w-full max-w-md pt-2 font-medium">
          <p>{truncate(movie?.overview, 150)}</p>
        </div>
      </div>
      <div className="banner_fadebottom"></div>
    </header>
  );
};

export default Banner;
