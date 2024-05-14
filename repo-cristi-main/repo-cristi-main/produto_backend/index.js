import express from 'express';
import cors from "cors";

import userRoutes from "./src/backend/routes/users.js";

const PORT = 4000;

const HOST = '0.0.0.0';

const app = express ();


app.use(cors());
app.use(express.json());

app.use("/user", userRoutes)

/*
app.get('/', (req, res)=> {

  res.send("<h1>Hello Word!</h1>")
});
*/


app.listen(PORT,HOST);

