import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getData } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const AlbumSongs = () => {
  const [songList, setSongList] = useState<any>();
  const [album, setAlbum] = useState<any>([]);
  const { id } = useParams();
  const { pathname } = useLocation();
  useEffect(() => {
    getData(pathname).then((value) =>
      setSongList(value.filter((art: any) => art.album === +id!))
    );
  }, []);


  useEffect(() => {
    getData(`artists/${id}/albums`).then((value) => setAlbum(value));
  }, []);

  const albumes = album.map((album: any) =>
    album.albums.find((item: any) => item.id === +id!)
  );

  return (
    <>
      {album !== undefined ? (
        <div className="album_detail">
          <img
            className="album_detail-img"
            src={albumes.filter(Boolean)[0]?.image}
            alt={albumes.filter(Boolean)[0]?.name}
          />
          <div className="album_detail_text">
            <h3>{albumes.filter(Boolean)[0]?.name}</h3>
            <p>
              Álbum <FontAwesomeIcon style={{ width: "5px" }} icon={faCircle} />{" "}
              {albumes.filter(Boolean)[0]?.name}
            </p>
            <p>{albumes.filter(Boolean)[0]?.total_tracks} canciones</p>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
      <div className="songs_container">
        <h2>Canciones</h2>

        {songList !== undefined ? (
          <ul className="song_list">
            {songList[0]?.songs.map((song?: any, index?:number) => (
              <li key={song.id} className="songs_detail-container">
                <p className="song_title">{index! + 1} {song.name}</p>
                <audio src={song.preview_url} controls>
                  Your browser does not support the audio element.
                </audio>
                
              </li>
            ))}
          </ul>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};
