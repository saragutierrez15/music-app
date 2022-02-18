import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { ArtistAlbums } from "../components/ArtistAlbums";
import { ListArtist } from "../components/ListArtist";
import { AlbumSongs } from "../components/AlbumSongs";
import { Home } from '../components/Home';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav className="nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="nav-li">
              <NavLink to="/artists">Artistas</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/artists" element={<ListArtist />} />
          <Route path="/artists/:id/albums" element={<ArtistAlbums />} />
          <Route path="/artists/:id/songs" element={<AlbumSongs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
