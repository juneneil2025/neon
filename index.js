// const express = require('express');
// const { Pool } = require('pg');
// require('dotenv').config();

// const app = express();
// const pgPool = new Pool({
//   connectionString: process.env.PG_URI,
//   ssl: { rejectUnauthorized: false }
// });

// pgPool.connect()
//   .then(client => {
//     console.log('Connected to PostgreSQL (Neon)');
//     client.release();
//   })
//   .catch(err => console.error('PostgreSQL error:', err));

// app.get('/postgres-data', async (req, res) => {
//   try {
//     const result = await pgPool.query('SELECT NOW()');
//     res.json(result.rows[0]);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });




const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
