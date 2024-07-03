const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//connection to database
connectDB();

//
app.use(express.urlencoded({extended: false}));

app.use(express.json());

//Routes
app.use("/",studentRoutes);
app.use("/",attendanceRoutes);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});