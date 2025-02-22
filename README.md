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

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/demo-project.git

cd demo-project

npm install

npm install

```
This will start the development server, and you can access the frontend at http://localhost:5173 (or the URL specified in your terminal).

# Backend Setup
- The backend is a Node.js/Express application located in the backend directory.
  1. Navigate to the backend directory
     ```
     cd ../backend
     ```
