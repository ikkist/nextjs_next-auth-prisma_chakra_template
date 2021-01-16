import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, _loading] = useSession();
  return (
    <>
      {!session && (
        <>
          <p>サインインしてください</p>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      )}
      {session && (
        <>
          <p>サインイン完了</p>
          <p>E-Mail: {session.user.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
    </>
  );
}
