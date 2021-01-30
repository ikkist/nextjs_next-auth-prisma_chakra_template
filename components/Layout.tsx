import { ReactNode } from "react";
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import { Header } from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = "Manerite" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Container maxWidth="1200px">
      <Header />
      {children}
    </Container>
  </div>
);
