import { client } from "../../../libs/client";
import styles from "../../../styles/pages/blog.module.scss";

import InnerLayout from "../layouts/GlobalInner";
import BlogLayout from "../../../layouts/BlogOuter";

import Categories from "../../../components/Categories";
import ArticleCard from "../../../components/ArticleCard";
import LinkButton from "../../../components/LinkButton";
import Breadcrumb from "../../../components/Breadcrumb";
export const CategoryId = ({ articles, categories }) => {
  if (articles.length === 0) {
    return (
      <>
        <div className={styles.noArticles}>
          <div>このカテゴリにはまだ記事がありません。ゴメンネ。</div>
          <LinkButton url={"/blog"} button="ブログ一覧へもどる" />
        </div>
      </>
    );
  }
  return (
    <div className={styles.container}>
      <Breadcrumb articles={articles} categories={categories} />
      <Categories categories={categories} />
      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>a{}</h2>
      </div>
      <ArticleCard articles={articles} />
    </div>
  );
};

export default CategoryId;

CategoryId.getLayout = function getLayout(categoryid) {
  return (
    <BlogLayout>
      <InnerLayout>{categoryid}</InnerLayout>
    </BlogLayout>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content) => `/category/page/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "articles",
    queries: { filters: `categories[equals]${id}` },
  });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      categories: categoryData.contents,
      articles: data.contents,
    },
  };
};
