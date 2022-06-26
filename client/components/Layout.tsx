import Head from "next/head";
import React, { FC, ReactNode } from "react";
import AppBar from "./AppBar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Muza</title>
      </Head>
      <body className="dark flex flex-col min-h-screen">
        <AppBar />
        <main className="dark:bg-dark bg-light flex-auto container py-10">
          {children}
        </main>
      </body>
    </>
  );
};

export default Layout;
