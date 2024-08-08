![Cover](https://github.com/hiirrxnn/Connectify/blob/main/client/src/assets/Logo.png)

# Connectify

**Connectify** : ChatApp is a real-time messaging application built with modern web technologies. It allows users to register, log in, send messages and files, and search for other users.


## Author
- [Hiren Sharma](https://www.github.com/hiirrxnn)

## About The Project

![HomePage](https://github.com/PalashChitnavis/BeatCode/blob/master/client/public/Main.png)SearchBFron

## Features

**User Authentication (Login/Register)**
**Real-time Messaging**
**File Sharing**
**Search Bar to Find Users**
**Responsive Design**

## Build With

**Client :** _React JS , Tailwind_

**Server :** _Node JS , Express JS_ 

**Database :** _MongoDB_

**Real-time Communication :** _WebSocket_

## Screenshots

1. Login/Register![App Screenshot](https://github.com/PalashChitnavis/BeatCode/blob/master/client/public/Login/Register.png)
2. Front Page
   ![App Screenshot](https://github.com/PalashChitnavis/BeatCode/blob/master/client/public/FrontPage.png)
3. Uploading files
   ![App Screenshot](https://github.com/PalashChitnavis/BeatCode/blob/master/client/public/FileBrowser.png)
4. SearchBar
   ![App Screenshot](https://github.com/PalashChitnavis/BeatCode/blob/master/client/public/SearchBar.png)

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
	cd BeatCode/api
```

Install dependencies

```bash
	npm install
```

## Usage

- To start the backend server in Development mode

```bash
	cd Connectify/api
	npm run dev
```

- To start the frontend server in Development mode

```bash
	cd Connectify/client
	npm run dev
```

## Environment Variables

Create a **.env** file , in both backend and frontend .

**Frontend** **.env**

        VITE_FRONTEND_URL=http://localhost:5173
        VITE_BACKEND_URL=http://localhost:4001

**Backend** **.env**

        PORT=4001
        DB_URL=mongodb://localhost:27017/ChatAppDB
        FRONTEND_URL=http://localhost:5173
        BACKEND_URL=http://localhost:4001


---
