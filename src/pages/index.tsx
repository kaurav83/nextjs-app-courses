import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { useTranslation, SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getLocale } from "../helpers/getLocale";
import { HeaderComponent } from "../components/header";
import { FooterComponent } from "../components/footer";
import { ContentView } from "../views/content";
import { AppView } from "../views/app";
import { ProfileCard } from "../components/profileCard";
import { CoursesComponent } from "../components/courses";
import { api } from "../api";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const {
    data: { data },
  } = useQuery("courses", api.getCourses);

  const contentJSX = <CoursesComponent courses={data} />;

  const sidebarJSX = <ProfileCard />;

  const mainContentJSX = (
    <ContentView content={contentJSX} sidebar={sidebarJSX} />
  );

  return (
    <>
      <Head>
        <title>{t("mainPage")}</title>
      </Head>
      <AppView
        header={<HeaderComponent />}
        content={mainContentJSX}
        footer={<FooterComponent />}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<SSRConfig> = async (
  context
) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("courses", api.getCourses);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(getLocale(context), [
        "header",
        "footer",
        "common",
        "course",
      ])),
    },
  };
};

export default Home;
