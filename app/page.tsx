import { getIronSessionData } from "@/session/session";

export default async function Home() {
  const session = await getIronSessionData();
  
  return (
    <>
      {session.isLoggedIn ? (
        <>
          <p>Welcome back, {session.username}!</p>
        </>
      ) : (
        <p>Please sign in</p>
      )}
    </>
  );
}
