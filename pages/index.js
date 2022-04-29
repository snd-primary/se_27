import styles from "../styles/pages/index.module.scss";
//components
import ArticleCard from "../components/ArticleCard";
import LinkButton from "../components/LinkButton";
//layouts
import ToppageLayout from "../layouts/ToppageOuter";
import InnerLayout from "../layouts/GlobalInner";
//staticSections
import Bigtypo from "../staticSections/toppage/BigTypo";
import Services from "../staticSections/toppage/Services";
import Motivation from "../staticSections/toppage/Motivation";
import Solution from "../staticSections/toppage/Solution";
import Flow from "../staticSections/toppage/Flow";
import AboutMe from "../staticSections/toppage/AboutMe";
import Cta from "../staticSections/toppage/Cta";

export default function Home({ articles }) {
  return (
    <>
      <div className={styles.container}>
        <main>
          <Bigtypo />
          <Services />
          <Motivation />
          <Solution />
          <Flow />
          <Cta />
          <AboutMe />

          <div className={styles.ttlWrapper}>
            <h2 className={styles.sectionTitle}>
              Blog
              <br />
              <div className={styles.subscriptJp}>お知らせと技術ブログ</div>
            </h2>
          </div>
          <ArticleCard articles={articles} />
          <div className={styles.btnWrapper}>
            <LinkButton url={"/blog"} button="記事一覧" />
          </div>
        </main>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(home) {
  return (
    <ToppageLayout>
      <InnerLayout>{home}</InnerLayout>
    </ToppageLayout>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  };
  const data = await fetch(
    "https://kp822wg687.microcms.io/api/v1/articles?offset=0&limit=3",
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount,
    },
  };
};
