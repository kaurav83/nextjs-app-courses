import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getLocale } from "../../helpers/getLocale";
import { AppView } from "../../views/app";
import { HeaderComponent } from "../../components/header";
import { FooterComponent } from "../../components/footer";
import { CourseComponent } from "../../components/Course";
import { Course } from "../../types";
import { api } from "../../api";

type Hash = {
  hash: string;
};

const CoursePage: NextPage<Hash> = ({ hash }) => {
  const { t } = useTranslation();
  const { data } = useQuery(["courseById"], () => api.getCourseById(hash));

  return (
    <>
      <Head>
        <title>
          {t("course:courseTitle")} {hash}
        </title>
      </Head>
      <AppView
        header={<HeaderComponent />}
        content={<CourseComponent course={data} />}
        footer={<FooterComponent />}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<SSRConfig> = async (
  context
) => {
  const { hash } = context.query as Hash;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("courseById", () => api.getCourseById(hash));

  api.updateViewCourseById(hash);

  return {
    props: {
      hash,
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(getLocale(context))),
    },
  };
};

export default CoursePage;
