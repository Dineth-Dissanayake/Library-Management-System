import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import {connect} from './utils/db.connection';

const app = express();
const PORT = process.env.PORT || "8080";

app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
    res.send("<h2>📚 Library Management System</h2>");
    next();
});

app.listen(PORT, () => {
    console.log('🚀 SERVER IS UP & RUNNING ON:', PORT);
    connect();
});