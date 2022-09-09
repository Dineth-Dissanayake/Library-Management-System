import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import {connect} from './utils/db.connection';

const auth = require("./api/middleware/pw.auth");

const app = express();
const PORT = process.env.PORT || "8080";

app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "20mb" }));

//IMPORT ROUTES
const bookRoutes = require("./api/routes/book.r");
app.use(bookRoutes);

const categoryRoutes = require("./api/routes/category.r");
app.use(categoryRoutes);

app.use("/api/", require("./api/routes/librarian.auth.r"));

app.listen(PORT, () => {
    console.log('🚀 SERVER IS UP & RUNNING ON:', PORT);
    connect();
});