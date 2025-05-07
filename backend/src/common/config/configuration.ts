export const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  db: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5433,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
});

export type Configuration = ReturnType<typeof configuration>;
