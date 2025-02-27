import React, { useState, useEffect } from 'react';
import './Quotes.css';
import './Home.css';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data['quotes']);
        console.log(quotes)
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching quotes:', err);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <div>Loading quotes...</div>;
  }

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  if (loading) {
    return <div>Loading quotes...</div>;
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">Web Scraper</div>
        <div className="navbar-menu">
          <button className="login-button" onClick={handleLogin}>Log In</button>
        </div>
      </nav>
      <div className="quotes-container">
        {quotes.map((q, index) => (
          <div className="quote-card" key={index}>
            <blockquote className="quote-text">"{q.quote}"</blockquote>
            <p className="quote-author">— {q.author}</p>
            <div className="quote-tags">
              {q.tags.map((tag, i) => (
                <span className="quote-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;