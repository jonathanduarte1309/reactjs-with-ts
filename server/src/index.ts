import express, { Request, Response } from 'express';
import { connectDB } from './db';
import User from './models/User';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

// Connect to SQLite database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

// Define another route
app.get('/api', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the API!' });
});

// Define a route to create a new user
app.post('/api/users', async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({ name, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: 'Error creating user' });
    }
});

// Define a route to get all users
app.get('/api/users', async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

// Sync models and start the server
app.listen(port, async () => {
    await User.sync();
    console.log(`Server is running at http://localhost:${port}`);
});
