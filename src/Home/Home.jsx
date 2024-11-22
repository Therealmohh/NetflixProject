import React from "react";
import "./Home.scss";
import Navbar from "../components/Navbar/Navbar";
import Row from "../components/Rows/Row";
import requests from "../../requests.js";
import Bannner from "../components/Banner/Bannner.jsx";

const Home = () => {
  return (
    <div className="home h-full bg-black">
      <Navbar />
      <Bannner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Home;
