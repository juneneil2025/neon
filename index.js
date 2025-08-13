const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});

