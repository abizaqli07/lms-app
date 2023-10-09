import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from "postgres";
import * as auth from "./schema/auth";
import * as post from "./schema/post";

export const schema = { ...auth, ...post };

export { myPgTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const connectionString = process.env.DATABASE_URL
const client = postgres(connectionString!);

export const db = drizzle(client);
