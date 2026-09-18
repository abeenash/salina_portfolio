import "server-only";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

/**
 * Server-only database client.
 *
 * `db` is null when DATABASE_URL is not configured, so local development
 * and `next build` work before Neon is provisioned. Callers must handle
 * the null case (see src/lib/projects.ts for the fallback pattern).
 */
export const db = process.env.DATABASE_URL
  ? drizzle(neon(process.env.DATABASE_URL), { schema })
  : null;
