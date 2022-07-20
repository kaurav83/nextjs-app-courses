import type { AppProps } from "next/app";
import { ReactNode, ReactElement } from "react";
import { NextPage } from "next";
import { Hydrate, QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { appWithTranslation } from "next-i18next";

import nextI18NextConfig from "../../next-i18next.config";

import "../styles/globals.scss";
import "../styles/libs/style.scss";
import "../styles/libs/signup.scss";
import "../styles/libs/profile.scss";

const queryClient = new QueryClient();

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => any;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

// export default appWithTranslation(MyApp, nextI18NextConfig); - подключая nextI18NextConfig происходит ошибка гидрации,
// вероятно из за того, что он уже есть в next.config.js

export default appWithTranslation(MyApp);
