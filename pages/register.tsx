import { useSession } from "next-auth/client";
import Link from "next/link";

export default function Register() {
  const [session] = useSession();
  return (
    <>
      {session && (
        <>
          <p>はじめまして {session.user.name} さん</p>
          <p>ユーザー名の登録</p>
          <input
            type="text"
            name="name"
            // @ts-ignore
            value={session.user.account}
            size={40}
          />
          <Link href="/">登録完了</Link>
        </>
      )}
    </>
  );
}
