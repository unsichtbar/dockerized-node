import { Request, Response } from 'express';
import express from "express";

// Constants
const PORT = process.env.PORT;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!\n');
});

app.listen(PORT, HOST as any);
console.log(`Running on http://${HOST}:${PORT}`);
console.log("And another line, for testing!");