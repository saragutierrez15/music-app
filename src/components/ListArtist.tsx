import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { getData } from "../services/api";

export const ListArtist = () => {
  const [artists, setArtists] = useState<any[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    getData(pathname).then((value) => setArtists(value));
  }, []);

  return (
    <div className="artist_container">
      {artists.length !== 0 ? (
        artists.map((artist) => (
          <div className="artist_img-container" key={artist.id}>
            <Link to={`/artists/${artist.id}/albums`}>
              <img className="artist_img" src={artist.image} alt={artist.name} />
              <p className="artist_name">{artist.name}</p>
            </Link>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
