import Document, { Head, Html, Main, NextScript } from "next/document";
import { LatoElement } from "../elements/lato";
import { RobotoElement } from "../elements/roboto";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <RobotoElement />
          <LatoElement />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
