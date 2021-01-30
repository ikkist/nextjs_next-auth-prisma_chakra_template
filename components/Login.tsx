import { signIn, signOut, useSession } from "next-auth/client";
import { Button, ButtonProps } from "@chakra-ui/react";

const Login = (props: ButtonProps) => {
  const [session] = useSession();
  if (!session) {
    return (
      <>
        <Button {...props} onClick={() => signIn()}>
          ログイン
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button {...props} onClick={() => signOut()}>
          ログアウト
        </Button>
      </>
    );
  }
};
export default Login;
