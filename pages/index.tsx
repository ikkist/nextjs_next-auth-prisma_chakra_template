import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <>
      {loading && (
        <>
          <p>Loading...</p>
        </>
      )}
      {!session && (
        <>
          <p>サインインしてください</p>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      )}
      {session && (
        <>
          <p>サインイン完了</p>
          <p>Name: {session.user.name}</p>
          <p>E-Mail: {session.user.email}</p>
          <p>Token: {session.accessToken}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
    </>
  );
}
