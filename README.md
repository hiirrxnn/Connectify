![Cover](https://github.com/hiirrxnn/Connectify/blob/main/client/src/assets/Logo.png)

# Connectify

**Connectify** : ChatApp is a real-time messaging application built with modern web technologies. It allows users to register, log in, send messages and files, and search for other users.

## Live Link
<div>
  <a href="https://connectifybyhiren.netlify.app/" target="_blank">Live Link</a>
</div>


## Author
- [Hiren Sharma](https://www.github.com/hiirrxnn)

## About The Project
**Connectify:** A real-time messaging application built with React, Tailwind CSS, Node.js, Express, MongoDB, and WebSocket. Users can register, log in, send messages and files, and search for other users. The frontend runs on Vite (port 5173), and the backend runs on Node.js (port 4001).

![HomePage](https://github.com/hiirrxnn/Connectify/blob/main/client/public/Main.png)

## Features

1. User Authentication (Login/Register)
2. Real-time Messaging
3. File Sharing
4. Search Bar to Find Users
5. Responsive Design

## Build With

**Client :** _React JS , Tailwind_

**Server :** _Node JS , Express JS_ 

**Database :** _MongoDB_

**Real-time Communication :** _WebSocket_

## Screenshots

1. Login/Register![App Screenshot](https://github.com/hiirrxnn/Connectify/blob/main/client/public/LoginOrRegister.png)
2. Front Page
   ![App Screenshot](https://github.com/hiirrxnn/Connectify/blob/main/client/public/FrontPage.png)
3. Uploading files
   ![App Screenshot](https://github.com/hiirrxnn/Connectify/blob/main/client/public/FileBrowser.png)
4. SearchBar
   ![App Screenshot](https://github.com/hiirrxnn/Connectify/blob/main/client/public/SearchBar.png)

## Prerequisites

Make sure you have the following installed on your system:

Node.js
npm (or yarn)
MongoDB

## Run Locally

Clone the project

```bash
	git clone https://github.com/hiirrxnn/Connectify
```

Go to the backend project directory

```bash
	cd /api
```

Install dependencies

```bash
	npm install
```

## Usage

- To start the backend server in Development mode

```bash
	cd /api
	node index.js
```

- To start the frontend server in Development mode

```bash
	cd /client
	npm run dev
```

## Environment Variables

Create a **.env** file , in the root directory of the project .

 **.env**

		port=4001	
		mongoURL=mongodb://localhost:27017/ConnectifyDB
		clientURL=http://localhost:5173
		jwtSecret=yourjwtsecret
		apiURL=http://localhost:4001

---
