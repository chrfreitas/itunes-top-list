import { useEffect, useState } from "react";
import iTunesAPI from "../../services/api/itunes";

import "./top-songs.css";

function TopSongs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function renderSongs() {
      const songs = await iTunesAPI.getSongs();
      setSongs(songs);
    }

    renderSongs();
  }, [])

  return (
    <div className="top-songs">
      <h3 className="top-songs__title">Top Songs</h3>
      <div className="top-songs__list">
        {songs.map(album => 
          <div key={album.id.attributes['im:id']}>
            <img className="top-songs__cover" src={album['im:image'][2].label} alt="Song Cover" />
            <div className="top-songs__name">{album['im:name'].label}</div>
            <div className="top-songs__author">{album['im:artist'].label}</div>
          </div>)}
      </div>
    </div>
  );
}

export default TopSongs;
