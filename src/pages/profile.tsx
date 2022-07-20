import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import nookies, { parseCookies } from "nookies";
import { useTranslation, SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getLocale } from "../helpers/getLocale";
import { ProfileComponent } from "../components/profile";
import { api } from "../api";

type Props = {
  token: string;
};

const ProfilePage: NextPage<Props> = ({ token }) => {
  const { t } = useTranslation();
  const { data } = useQuery(["profile"], () => api.profile(token));

  return (
    <>
      <Head>
        <title>
          {t("profile:profileUser")}
          {/* {profile.name} - провоцирует Warning в консоли */}
        </title>
      </Head>
      <ProfileComponent profile={data.data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const locale = getLocale(context);

  const cookie = nookies.get(context);

  if (!cookie.token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const token = parseCookies({ req }).token;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("profile", () => api.profile(token));

  return {
    props: {
      token,
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale, ["profile"])),
    },
  };
};

export default ProfilePage;
