const { Pool } = require("pg");
const { drizzle } = require("drizzle-orm/node-postgres");
const { migrate } = require("drizzle-orm/postgres-js/migrator");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:postgres@127.0.0.1:5432/data?schema=public",
});

const db = drizzle(pool);

async function main() {
  await migrate(db, { migrationsFolder: "drizzle" });
}

main().catch((err) => {
  console.log(err);
});
