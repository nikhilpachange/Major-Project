const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbconnection');
const User = require('./db/user');
const cors = require('cors');

// Middleware for parsing JSON
app.use(express.json());
app.use(cors()); // Enable CORS for all requests

// Registration route
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);

        // Create a new user
        const user = new User({ username, password });
        await user.save();
        
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Check password
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

// Connect to the database
connectDB();

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
