const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { scrapeQuotes }  = require('./webscrape');
const cors = require("cors");

require('./auth');
function isLoggedIn(req,res,next){
  req.user ? next() : res.sendStatus(401);
}

const app = express();
app.use(session({secret: "cats"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.get('/login',(req,res) => {
  res.send('<a href = "/auth/google">Authenticate with Google</a>');
});


app.get("/", async (req, res) => {
  try {
    const quotes = await scrapeQuotes();
    res.json({ quotes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while scraping quotes." });
  }
});

app.get('/auth/google',
  passport.authenticate('google', {scope: ['email','profile']})
);

app.get('/api', (req,res)=>{
  res.json({"users": ["user1","user1","user3"]})
})

app.get('/google/callback', 
  passport.authenticate('google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/failure',

  })
);

app.get('/auth/failure', (req,res) => {
  res.send("something went wrong");
})

app.get('/protected', isLoggedIn ,(req,res) => { 
  res.redirect('http://localhost:3000');
}); 

app.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.session.destroy();
    res.send("Thank you for visiting!");
  });
});

app.listen(5000, () => console.log('listening on : 5000'));


