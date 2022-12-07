import { type NextPage } from "next";
import Head from "next/head";
import { FC, useState } from "react";
import { Card } from "../components/Card";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        title="Hello World"
        isOpen={navbarIsOpen}
        onToggle={() => setNavbarIsOpen((prevState) => !prevState)}
      />
      <main className="flex min-h-screen flex-col bg-gray-200  dark:bg-gray-700">
        <Card />
      </main>
    </>
  );
};

export default Home;
