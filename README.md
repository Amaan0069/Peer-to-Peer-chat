# Peer-to-Peer Real-Time Chat Application

- The Peer-to-Peer (P2P) Chat Application is a decentralized messaging platform designed to facilitate direct communication between users without the need for a central server. By eliminating reliance on 
   intermediary servers, the application ensures enhanced privacy, security, and user control. Messages are transmitted directly between users via TCP sockets, enabling real-time communication while maintaining        data integrity.

- Users can register on the platform using their email address or mobile number, search for other users, and establish direct connections for seamless communication. To ensure message reliability, the application -   incorporates a temporary message storage mechanism. If a recipient is offline, messages are securely stored and delivered automatically once the user reconnects, guaranteeing no loss of communication.

- Additionally, the application features an online status indicator, which displays a green badge next to a user’s name when they are active and available for communication. This functionality enhances user -         experience by providing real-time visibility into the availability of contacts.

- The P2P Chat Application integrates advanced socket programming, networking principles, and intuitive user interface design to deliver a robust and efficient messaging solution. It is an ideal platform for users    seeking a secure, private, and decentralized communication tool.

# Workflow:

- A user registers and logs into the application.

- The user searches for another user using their email or phone number.

- A direct TCP connection is established between the two peers.

- Messages are sent and received in real-time.

- If a recipient is offline, messages are stored in a local queue and delivered when they come online.

## Installation

Follow the steps below to get started with this project.

**Clone the repository**

```bash
git clone https://github.com/yourusername/demo-project.git
```
**Navigate into the project directory**
```
cd demo-project
```
# Frontend Setup

-The frontend is built with React and is located in the frontend directory.

 **1. Navigate to the frontend directory**
   ```
      cd frontend
   ```
 **2. Install the dependencies**
   ```
   npm install
   ```
 3. Run the frontend development server
   ```
   npm run dev
```
**This will start the development server, and you can access the frontend at http://localhost:5173 (or the URL specified in your terminal)**.


# Backend Setup

- The backend is a Node.js/Express application located in the backend directory.

  
**1. Navigate to the backend directory**
     ```
     cd ../backend
     ```
**2. Install the dependencies**
   ```
      npm install
   ```
**3. Set up environment variables**
    
- In the backend directory, create a .env file and configure the necessary environment variables. Here is an example of what your .env file might look like:
- ```
   PORT=5000
   DB_URI=mongodb://localhost:27017/demo-db
   JWT_SECRET=yourSecretKey
  ```
 **4. Run the backend server**
   ```
   npm start
   ```
**This will start the backend server, and you can access it at http://localhost:5000.**

```
Demo
├─ backend
│  ├─ .env                     # Environment variables for backend
│  ├─ configuration
│  │  └─ db.js                 # Database configuration
│  ├─ index.js                 # Main entry point for the backend
│  ├─ models
│  │  ├─ Message.js            # Message model
│  │  └─ User.js               # User model
│  ├─ package-lock.json
│  ├─ package.json             # Backend dependencies
│  └─ sockets
│     └─ index.js              # WebSocket server
└─ frontend
   ├─ eslint.config.js         # ESLint configuration
   ├─ index.html               # Main HTML file for React
   ├─ package-lock.json
   ├─ package.json             # Frontend dependencies
   ├─ public
   │  └─ vite.svg              # Vite logo
   ├─ README.md                # Project overview
   ├─ src
   │  ├─ App.css               # Main CSS file for the frontend
   │  ├─ App.jsx               # Main React component
   │  ├─ assets
   │  │  ├─ Banner.jpg         # Banner image
   │  │  └─ react.svg          # React logo image
   │  ├─ Components
   │  │  ├─ Auth
   │  │  │  ├─ Login.jsx       # Login component
   │  │  │  └─ Signup.jsx      # Signup component
   │  │  └─ Message
   │  │     ├─ Message.jsx     # Message component
   │  │     ├─ MessageLayout.jsx # Layout for messages
   │  │     ├─ MessageWindow.jsx # Window to display messages
   │  │     └─ Users.jsx       # Display user list
   │  ├─ Context
   │  │  └─ WebSocket.jsx      # WebSocket context for frontend
   │  ├─ index.css             # Global CSS
   │  └─ main.jsx              # Entry point for React
   └─ vite.config.js           # Vite configuration file
```

- For more details : https://drive.google.com/file/d/1r6FMWWxQF6uS4b2Dgimpy7TwdMB2EfsC/view?usp=drive_link
