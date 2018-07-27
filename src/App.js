import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <header className="page-header">
          <nav className="row">
            <h1 className="main-title col-sm"><ion-icon name="microphone"></ion-icon>Bloc Jams</h1>

            <div className="home-link">
              <Link to='/'><button className="link">Home</button></Link>
            </div>
            <div className="library-link">
              <Link to='/library'><button className="link">Library</button></Link>
            </div>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
