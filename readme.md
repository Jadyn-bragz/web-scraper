Overview
This application is a full-stack project that scrapes quotes from a website using Node.js and Puppeteer, exposes the data via an Express API, and displays the quotes in a React frontend. Google OAuth authentication is integrated for user login.

Tech Stack
Backend uses Node.js, Express,Puppeteer and CORS

Frontend uses React and CSS

Google OAuth: Implemented with Passport to allow users to log in with their Google accounts.

Setup and Running the App
Backend Setup
Clone or Download the Repository:

Ensure you have Node.js installed.
Install Dependencies:
npm install Express, Puppeteer, Passport ,CORS, and other required packages.

Configure Authentication:

Ensure your Google OAuth credentials (Client ID and Client Secret) are set up in your configuration (or environment variables).
Verify the callback URL (e.g., http://localhost:5000/google/callback) is correctly configured in your Google Cloud Console.

Start the Backend Server:
node index.js
The server listens on port 5000 

Frontend Setup
npm start

This starts the development server on port 3000

Login Button: The login button in the navigation bar redirects the user to http://localhost:5000/auth/google to start the OAuth flow.

Accessing the App:
    Open your web browser and navigate to http://localhost:3000 to view the React frontend.







