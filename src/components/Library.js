import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library container'>
        {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index} className="row album-link">
              <img src={album.albumCover} alt={album.title} className="col-sm cover-image" />
              <div className="info col-sm">
                <div className="info-album-title">{album.title}</div>
                <div className="info-artist">artist: {album.artist}</div>
                <div className="info-songs">{album.songs.length} songs</div>
              </div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
