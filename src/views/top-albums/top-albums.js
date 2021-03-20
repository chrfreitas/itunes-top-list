import { useEffect, useState } from "react";
import iTunesAPI from "../../services/api/itunes";

import "./top-albums.css";



function TopAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
  async function renderAlbums() {
    const albums = await iTunesAPI.getAlbums();
    setAlbums(albums);
  }

  renderAlbums();
  }, [])

  return (
    <div className="top-albums">
      <h3 className="top-albums__title">Top Albums</h3>
      <div className="top-albums__list">
        {albums.map(album => 
          <div key={album.id.attributes['im:id']}>
            <img className="top-albums__cover" src={album['im:image'][2].label} alt="Album Cover" />
            <div className="top-albums__name">{album['im:name'].label}</div>
            <div className="top-albums__author">{album['im:artist'].label}</div>
          </div>)}
      </div>
    </div>
  );
}

export default TopAlbums;
