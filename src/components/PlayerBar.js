import React, { Component } from 'react';
import './PlayerBar.css';

class PlayerBar extends Component {
  render() {
    return(
      <section className="player-bar container">
      <div className="row">
        <section className="c" id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick} >
            <span className="ion-skip-backward"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick} >
            <span className="ion-skip-forward"></span>
          </button>
        </section>
        <section className="row" id="time-control">
        <div className="col-sm">
          <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
        </div>
        </section>
        <section className="row" id="volume-control">
        <div className="col-sm">
          <div className="icon ion-volume-low" id="low-vol"></div>
          <input
            type="range"
            className="seek-bar"
            value={this.props.currentVolume}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
          />
          <div className="icon ion-volume-high" id="high-vol"></div>
        </div>
        </section>
      </div>
      </section>
    );
  }
}

export default PlayerBar;
