export const dynamic = 'force-dynamic'; // static by default, unless reading the request

import { createClient } from "@libsql/client/web";
const url = process.env.TURSO_DATABASE_URL!;
const authToken = process.env.TURSO_AUTH_TOKEN!;
 
export async function GET() {
  const client = createClient({ url, authToken });
  const result = await client.execute("SELECT 1");
  return new Response(`Hello from ${process.env.VERCEL_REGION} ${result}`);
}
