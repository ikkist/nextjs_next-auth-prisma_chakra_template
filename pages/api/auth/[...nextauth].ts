import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import prisma, { User } from "../../../lib/prisma";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    newUser: "/register",
  },
  session: {
    jwt: false,
    updateAge: 60 * 60, // 1時間
  },
  callbacks: {
    session: async (session: any, user: User) => {
      session.user.account = user.account;
      session.user.id = user.id;
      return Promise.resolve(session);
    },
  },
};
