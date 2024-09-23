const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.SECRET,
  port: process.env.PORT,
  connectionString: process.env.DATABASE_URL, // This is for Render
  ssl: {
    rejectUnauthorized: false, // Required for connecting to managed databases over SSL
  },
});

// Test connection to the database
pool.connect((err, client, release) => {
  if (err) {
    console.error("Error acquiring client", err.stack);
  } else {
    console.log("Connected to the PostgreSQL database successfully");
    release(); // Release the client back to the pool
  }
});

module.exports = pool;
