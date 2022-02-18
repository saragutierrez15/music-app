import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getData } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const ArtistAlbums = () => {
  const [albumList, setAlbumList] = useState<any>([]);
  const [artist, setArtist] = useState<any>([]);
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    getData(pathname).then((value) =>
      setAlbumList(value.filter((art: any) => art.artist === +id!))
    );
  }, []);

  useEffect(() => {
    getData("artists").then((value) =>
      setArtist(value.filter((art: any) => art.id === +id!))
    );
  }, []);

  return (
    <>
      {artist !== undefined ? (
        <div className="artist-_detail">
          <div className="artist-_detail-container">
            <img
              className="artist_img"
              src={artist[0]?.image}
              alt={artist[0]?.name}
            />
            <h3>{artist[0]?.name}</h3>
            <p>{artist[0]?.popularity}</p>
          </div>
        </div>
      ) : (
        <h2>Loading..</h2>
      )}
      <div className="album_container">
        <h2>Álbumes</h2>
        {albumList[0] !== undefined ? (
          albumList[0].albums.map((album: any) => (
            <div className="album_detail-container" key={album.id}>
              <img className="album_img" src={album.image} alt={album.name} />
              <div className="album_title">
                <p>{album.name}</p>
                <p className="songs_total">Canciones: {album.total_tracks}</p>
              </div>
              <Link className="icon_play" to={`/artists/${album.id}/songs`}>
                <FontAwesomeIcon icon={faPlay} />
              </Link>
            </div>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};
