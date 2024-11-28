const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session'); // Importamos express-session

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());



// Middlewares 
app.use(
  session({
    secret: 'hello123', //unique password for the sessions
    resave: false,
    saveUninitialized:false,
    cookie:{secure:false }, // true for HTTPS

  })
);

//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/programs', require('./routes/programs'));
app.use('/api/auth', require('./routes/auth')); 



//MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch((err) => console.error('Error connecting to mongoDB',err));



//start the server
const PORT = process.env.PORT||5000; //if port is not defined use 5000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  
});
