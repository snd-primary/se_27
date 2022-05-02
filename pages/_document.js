import Document, { Html, Head, Main, NextScript } from "next/document";
// import { existsGaId, GA_ID } from "../libs/gtag";
// import Script from "next/script";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@700&family=Zen+Kaku+Gothic+New:wght@400;700&&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/svg+xml" href="favicon.svg" />
          <link rel="icon" type="image/png" href="favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
