import React from "react";
import Musica from "./img/music1.jpeg";
import Musicb from "./img/music2.jpeg";
import Musicd from "./img/music3.png";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "2em",
      }}
    >
      <a href="https://live101.in/" target="_blank">
        <img
          style={{ width: "25em", height: "25em" }}
          src={Musica}
          alt="musica"
        />
      </a>
      <a href="https://live101.in/" target="_blank">
        <img
          style={{ width: "25em", height: "25em" }}
          src={Musicb}
          alt="musicb"
        />
      </a>
      <a href="https://live101.in/" target="_blank">
        <img
          style={{ width: "25em", height: "25em" }}
          src={Musicd}
          alt="musicd"
        />
      </a>
    </div>
  );
};

export default About;
