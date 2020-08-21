

module.exports = {
  "url": process.env.TYPEORM_URL,

  "entities": process.env.TYPEORM_ENTITIES,
  "migrations": process.env.TYPEORM_MIGRATIONS,
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
} 

