import { NextPage, GetServerSideProps } from "next";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getLocale } from "../helpers/getLocale";
import Head from "next/head";
import { setCookie } from "nookies";
import { SignUp } from "../components/signUp";

type Props = {
  title: string;
};

const RegistrationPage: NextPage<Props> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("form:registerPage")}</title>
      </Head>
      <SignUp />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props & SSRConfig> = async (
  context
) => {
  setCookie(context, "auth", "true");

  return {
    props: {
      title: "Sign up page",
      ...(await serverSideTranslations(getLocale(context), ["form"])),
    },
  };
};

export default RegistrationPage;
