const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');


const app = express();

//import route
const NoticeRoutes = require('./Routes/AdminNotice');
const PDFRoutes = require('./Routes/AdminPDF');




//app middleware
app.use(bodyParser.json());
app.use(cors());
//app.use(multer());

app.use(NoticeRoutes);
app.use(PDFRoutes);


app.use(StudentRoute);
app.use(ResearchTopic);




const PORT = 8001;
const DB_URL = 'mongodb+srv://pamitha:pamitha@database1.gqpga.mongodb.net/DSPROJECT?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
}).catch((err) => console.log('DB connection error', err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

