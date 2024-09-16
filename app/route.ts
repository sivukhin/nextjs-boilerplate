export const dynamic = 'force-dynamic'; // static by default, unless reading the request

import { createClient } from "@libsql/client/web";
const url = process.env.TURSO_DATABASE_URL!;
const authToken = process.env.TURSO_AUTH_TOKEN!;
 
export function GET(_: Request) {
  const client = createClient({ url, authToken });
  client.execute("SELECT 1").then(x => console.info(x));
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
