module.exports = {
  type: "postgres",
  url: process.env.HEROKU_POSTGRESQL_GRAY_URL,
  entities: [".dist/models/*.js"],
  migrations: ["dist/database/migrations/*.js"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
