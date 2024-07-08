module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_HOSTDB_PORT,
  "username": process.env.DB_HOSTDB_USERNAME,
  "password": process.env.DB_HOSTDB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "entities": ["dist/**/*.entity{.ts}"],
  "synchronize": true
}
