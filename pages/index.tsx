import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import UserCard from "../components/UserCard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen flex items-center justify-center">
        <UserCard />
      </main>
    </div>
  );
};

export default Home;
