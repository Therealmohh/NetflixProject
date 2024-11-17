import React from "react";
import "./Home.scss";
import Navbar from "../components/Navbar/Navbar";
import Row from "../components/Rows/Row";
import requests from "../../requests.js";

const Home = () => {
  return (
    <div className="home">
      {/* <Navbar /> */}
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default Home;
