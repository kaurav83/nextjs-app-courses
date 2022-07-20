import { GetServerSideProps } from "next";
import Head from "next/head";
import nookies from "nookies";
import type { ReactElement } from "react";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getLocale } from "../../helpers/getLocale";
import type { NextPageWithLayout } from "../_app";
import Layout from "../../components/layout";
import { TabSet } from "../../components/tabs";
import { HeaderElement } from "../../elements/header";
import { HeaderComponent } from "../../components/header";
import { FooterComponent } from "../../components/footer";
import { AppView } from "../../views/app";

const AboutPage: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("about-teacher:aboutTeacher")}</title>
      </Head>
      <section className="description-layout">
        <div className="container">
          <div className="tab-pane show" id="tabAbout">
            <h3 className="subtitle-h3">About Me</h3>
            <p className="par">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum scelerisque nibh sed ligula blandit, quis faucibus
              lorem pellentesque. Suspendisse pulvinar dictum pellentesque.
              Vestibulum at sagittis lectus, sit amet aliquam turpis. In quis
              elit tempus, semper justo vitae, lacinia massa. Etiam sagittis
              quam quis fermentum lacinia. Curabitur blandit sapien et risus
              congue viverra. Mauris auctor risus sit amet cursus sollicitudin.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              feugiat sodales massa, in viverra dolor condimentum ut. In
              imperdiet, justo nec volutpat blandit, tellus justo tempor quam,
              sed pretium nibh nunc nec mauris. Mauris vel malesuada magna.
              Quisque iaculis molestie purus, non luctus mauris porta id.
              Maecenas imperdiet tincidunt mauris vestibulum vulputate. Aenean
              sollicitudin pretium nibh, et sagittis risus tincidunt ac.
              Phasellus scelerisque rhoncus massa, ac euismod massa pharetra
              non. Phasellus dignissim, urna in iaculis varius, turpis libero
              mollis velit, sit amet euismod arcu mi ac nibh. Praesent tincidunt
              eros at ligula pellentesque elementum. Fusce condimentum enim a
              tellus egestas, sit amet rutrum elit gravida. Pellentesque in
              porta sapien. Fusce tristique maximus ipsum et mollis. Sed at
              massa ac est dapibus vulputate at eu nibh.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppView
      header={<HeaderComponent />}
      content={
        <Layout>
          <HeaderElement />
          <TabSet />
          {page}
        </Layout>
      }
      footer={<FooterComponent />}
    />
  );
};

export const getServerSideProps: GetServerSideProps<SSRConfig> = async (
  context
) => {
  const cookie = nookies.get(context);

  if (!cookie.token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(getLocale(context))),
    },
  };
};

export default AboutPage;
