import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface ISessionData {
  username: string;
  isLoggedIn: boolean;
}

export async function getIronSessionData() {
  const session = await getIronSession<ISessionData>(await cookies(), {
    password: process.env.SESSION_SECRET!,
    cookieName: process.env.SESSION_COOKIE!
  });

  return session
}
