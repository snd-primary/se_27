import "../styles/globals.scss";
import Head from "next/head";
import GoogleAnalytics from "../components/GoogleAnalytics";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <GoogleAnalytics />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
