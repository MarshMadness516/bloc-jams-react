import React from 'react';
import './Landing.css';

const Landing = () => (
  <section className="landing container">
    <div className="motto row">
      <h1 className="hero-title col-md"><ion-icon name="musical-note" className="note"></ion-icon>Turn the music up!<ion-icon name="musical-note"></ion-icon></h1>
    </div>

    <section className="selling points container">
    <div className="row">
      <div className="point-one col-sm">
        <ion-icon name="musical-notes" ></ion-icon>
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point-two col-sm">
        <ion-icon name="musical-notes"></ion-icon>
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point-three col-sm">
        <ion-icon name="musical-notes"></ion-icon>
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </div>
    </section>
  </section>
);

export default Landing;
