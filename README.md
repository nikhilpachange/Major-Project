# MERN Stack Authentication App

A simple authentication application built using the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates user registration and login functionalities.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User registration
- User login
- Simple and clean user interface

## Technologies Used
- **MongoDB**: NoSQL database for storing user information.
- **Express**: Web framework for Node.js for building the RESTful API.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for executing the backend.
- **Axios**: Promise-based HTTP client for making requests from the frontend.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Make sure it's installed and running on your local machine)

### Clone the Repository
```bash
git clone https://github.com/nikhilpachange/mern-authentication-app.git
cd mern-authentication-app

Backend Setup
1. Navigate to the backend directory:cd backend

2. Install the required packages:npm install

3. Start the backend server: npm start

4. The backend server will run on http://localhost:8000.

MongoDB Configuration
Ensure your MongoDB instance is running and update the MongoDB connection string in db/dbconnection.js if necessary:await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');

Frontend Setup
1. Navigate to the frontend directory:cd frontend

2.Install the required packages:npm install

3.Start the frontend server:npm start

4.The frontend application will run on http://localhost:3000

Register User
POST /register
Request Body:
{
    "username": "user123",
    "password": "password123"
}

Response:
Success: 201 Created with message "Registration successful"
Error: 500 Internal Server Error with error message
Login User
POST /login
Request Body:
{
    "username": "user123",
    "password": "password123"
}

Response:
Success: 200 OK with message "Login successful"
Error: 401 Unauthorized with error message
Usage
Open your browser and navigate to http://localhost:3000.
Use the registration form to create a new user account.
Once registered, log in using the credentials you just created.
Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

Fork the repository.
Create your feature branch (git checkout -b feature/MyFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/MyFeature).
Open a pull request.

License
This project is licensed under the MIT License -
