import Head from "next/head";
import React, { FC, ReactNode } from "react";
import AppBar from "./AppBar";
import Menu from "./Menu";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Muza</title>
      </Head>
      <div className="dark flex flex-col min-h-screen">
        <AppBar />
        <main className="dark:bg-dark bg-light flex-auto px-10 py-10">
          <div className="container">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
