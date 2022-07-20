import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { setCookie } from "nookies";

type Props = {
  title: string;
};

const AboutPage: NextPage<Props> = ({ title }) => {
  // useEffect(() => {
  //   throw new Error("useEffect error");
  //   console.log("useEffect");
  // }, []);

  return (
    <>
      <Head>
        <title>О нас</title>
      </Head>
      <h1>{title}</h1>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // throw new Error('Error for About');
  setCookie(context, "auth", "true");

  return {
    props: {
      title: "About Page",
    },
  };
};

export default AboutPage;
