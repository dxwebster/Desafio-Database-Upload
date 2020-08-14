console.log(
  "process.env.HEROKU_POSTGRESQL_GRAY_UR :>>",
  process.env.HEROKU_POSTGRESQL_GRAY_UR
);
module.exports = {
  type: "postgres",
  url: process.env.HEROKU_POSTGRESQL_GRAY_URL,
  entities: ["dist/src/models/*.js"],
  migrations: ["dist/src/database/migrations/*.js"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
