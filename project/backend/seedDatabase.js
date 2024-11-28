require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Program = require('./models/Program');
const { usersData } = require('./data/usersData'); // Ajusta según tu ruta
const { programsData } = require('./data/programsData'); // Ajusta según tu ruta

const seedDatabase = async () => {
  try {
    // Conexión a MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Elimina datos previos
    await User.deleteMany();
    await Program.deleteMany();
    console.log('Existing data cleared.');

    // Inserta usuarios
    await User.insertMany(usersData);
    console.log('Users inserted.');

    // Inserta programas
    await Program.insertMany(programsData);
    console.log('Programs inserted.');

    mongoose.disconnect();
    console.log('Database populated and connection closed.');
  } catch (err) {
    console.error('Error populating database:', err);
    mongoose.disconnect();
  }
};

seedDatabase();
