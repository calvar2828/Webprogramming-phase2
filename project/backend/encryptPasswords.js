const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Ajusta esta ruta según tu estructura
require('dotenv').config(); // Para cargar la configuración del archivo .env

const encryptPasswords = async () => {
  try {
    // Conecta a la base de datos
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Encuentra todos los usuarios
    const users = await User.find();

    // Recorre los usuarios y encripta las contraseñas si no están encriptadas
    for (const user of users) {
      // Comprueba si la contraseña ya está encriptada
      const isHashed = user.password.startsWith('$2b$');
      if (!isHashed) {
        console.log(`Encrypting password for user: ${user.username}`);
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword; // Actualiza la contraseña encriptada
        await user.save(); // Guarda los cambios en la base de datos
      } else {
        console.log(`Password for user ${user.username} is already encrypted.`);
      }
    }

    console.log('All passwords have been successfully encrypted.');
    mongoose.disconnect(); // Cierra la conexión con la base de datos
  } catch (error) {
    console.error('Error encrypting passwords:', error);
    mongoose.disconnect(); // Asegura la desconexión en caso de error
  }
};

encryptPasswords();
