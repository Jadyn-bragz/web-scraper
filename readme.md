# 📜 Web Scraper App  

This is a full-stack project that scrapes quotes from a website using **Node.js** and **Puppeteer**, exposes the data via an **Express API**, and displays the quotes in a **React frontend**.  
Google OAuth authentication is integrated for user login.  

---

## Tech Stack  
### **Backend**  
- **Node.js**  
- **Express.js**  
- **Puppeteer**  
- **CORS**  

### **Frontend**  
- **React.js**  
- **CSS**  

### **Authentication**  
- **Google OAuth** (Implemented with **Passport.js**)  

---

## Setup and Running the App  

### Backend Setup  
1. **Clone or Download the Repository:**  
   ```sh
   git clone <repository-url>
   cd <repository-folder>/server

2.Ensure you have Node.js installed.
3. Install dependencies
npm install express puppeteer passport cors dotenv
4.Configure Authentication:
Set up your Google OAuth credentials (Client ID & Client Secret).
Add them to your .env file:
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
Verify the callback URL in your Google Cloud Console:
http://localhost:5000/google/callback
5. Start the backend server
node index.js
Frontend Setup
Navigate to the client directory:
cd ../client
Install dependencies:
npm install
Start the development server:
npm start
This starts the frontend on port 3000.

The login button in the navigation bar redirects users to:
http://localhost:5000/auth/google

 Accessing the App

Open your web browser and go to:
http://localhost:3000


If Puppeteer fails due to missing dependencies, install them manually:
sudo apt-get install -y chromium-browser

Check your Google OAuth Redirect URI in your Google Cloud Console if login fails.
Ensure both the backend (5000) and frontend (3000) are running.




