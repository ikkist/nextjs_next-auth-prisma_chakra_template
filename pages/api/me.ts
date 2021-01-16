import { NextApiHandler } from "next";
import { getSession } from "next-auth/client";

const me: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    res.end(`Hi ${session.user.name}`);
  } else {
    res.statusCode = 403;
    res.end("Invalid User");
  }
};

export default me;
