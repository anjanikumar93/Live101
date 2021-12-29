import React, { useState, useEffect } from "react";
import axios from "axios";
import Song from "./img/song.jpeg";

const Home = () => {
  const [artists, setArtists] = useState([]);
  const [search, setNewSearch] = useState("");
  console.log(artists);

  useEffect(() => {
    const article = {
      event_category: ["private_event"],
      genre_category: null,
      artist_category: ["singer"],
      travel_city: null,
      gender: null,
      languages: null,
    };
    axios
      .post(
        "https://api.devlive101.net/wauth/search/v1/api/artistprofile/filtermultipleprofile?limit=8&page=1",
        article
      )
      .then((response) => setArtists(response.data.Response.result));
  }, []);

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? artists
    : artists.filter((person) =>
        person.personal_info.first_name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1em",
        }}
      >
        <p
          style={{
            color: "#343a40",
            marginRight: 5,
            fontSize: "1.5em",
            fontFamily: "bold",
          }}
        >
          Search Name
        </p>
        <input
          style={{
            width: "40%",
            height: "3em",
            borderColor: "#2196F3",
            borderRadius: "0.5em",
          }}
          type="text"
          placeholder="Search Name"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {filtered.map((item, index) => {
          return (
            <div
              style={{
                width: "16em",
                height: "20em",
                border: "1px solid #607d8b",
                margin: "1em",
                boxShadow: "0 10px 25px 0 rgba(0,0,0,.08)",
                borderRadius: "0.5em",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                lineHeight: "0.3em",
                padding: 5,
              }}
              key={index}
            >
              <div>
                <img
                  src={Song}
                  alt="song"
                  style={{
                    width: "16em",
                    height: "10em",
                    borderTopLeftRadius: "0.5em",
                    borderTopRightRadius: "0.5em",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "bold",
                    color: "#343a40",
                    fontWeight: "500",
                  }}
                >
                  Name:
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "#6c757d",
                    fontWeight: "300",
                    marginLeft: 5,
                  }}
                >
                  {item.personal_info.first_name}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "#6c757d",
                    fontWeight: "300",
                    marginLeft: 5,
                  }}
                >
                  {item.personal_info.last_name}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "bold",
                    color: "#343a40",
                    fontWeight: "500",
                  }}
                >
                  Mobile No:
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "#6c757d",
                    fontWeight: "300",
                    marginLeft: 5,
                  }}
                >
                  {item.personal_info.mobile}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "bold",
                    color: "#343a40",
                    fontWeight: "500",
                  }}
                >
                  Email:
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "#6c757d",
                    fontWeight: "300",
                    marginLeft: 5,
                  }}
                >
                  {item.personal_info.email}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "bold",
                    color: "#343a40",
                    fontWeight: "500",
                  }}
                >
                  City:
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "#6c757d",
                    fontWeight: "300",
                    marginLeft: 5,
                  }}
                >
                  {item.personal_info.city}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
