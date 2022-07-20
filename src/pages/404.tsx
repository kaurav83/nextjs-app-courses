import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useTranslation, SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getLocale } from "../helpers/getLocale";
import { ErrorElement } from "../elements/error";

export const NotFoundPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("common:pageNotFound")}</title>
      </Head>
      <ErrorElement statusCode={404} title={t("common:pageNotFound")} />
    </>
  );
};

export const getStaticProps: GetStaticProps<SSRConfig> = async (context) => {
  const locale = getLocale(context);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default NotFoundPage;
