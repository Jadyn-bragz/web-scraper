import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <body>
         <nav className="navbar">
          <div className="navbar-logo">Web Scraper</div>
          <div className="navbar-menu">
          <button className="login-button">Log In</button>
        </div>
      </nav>
      <main className="home-content">
        <h1>This is a Web Scraper</h1>
        <p>This is your home page. Start exploring our content!</p>
      </main>
      </body>
    </div>
  );
}

export default Home;
