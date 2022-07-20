import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getLocale } from "../helpers/getLocale";
import { Login } from "../components/login";

type Props = {
  title: string;
};

const LoginPage: NextPage<Props> = ({ title }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("form:title")}</title>
      </Head>
      <Login />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props & SSRConfig> = async (
  context
) => {
  return {
    props: {
      title: "Login page",
      ...(await serverSideTranslations(getLocale(context), ["form"])),
    },
  };
};

export default LoginPage;
