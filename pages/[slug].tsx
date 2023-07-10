import { readdirSync } from "fs";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import matter from "gray-matter";
import { IPost } from ".";
import remarkGfm from "remark-gfm";
import { Layout } from "../components";
import { remark } from "remark";
import remarkParse from "remark-parse";
import Prism from "prismjs";
import rehypePrism from "rehype-prism";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import { useEffect } from "react";

import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-diff";

const PostDetail: NextPage<IPostDetail> = ({ frontMatter, post }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout title={frontMatter.title}>
      <section>
        <div
          dangerouslySetInnerHTML={{ __html: post }}
          suppressHydrationWarning
        />
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = readdirSync("_posts").map((file) => {
    const [name, _] = file.split(".");
    return { params: { slug: name } };
  });
  return {
    paths: files,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { content, data } = matter.read(`_posts/${ctx.params?.slug}.md`);
  const { value: post } = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrism, {
      plugins: [
        "line-numbers",
        "show-language",
        "copy-to-clipboard",
        "toolbar",
        "diff-highlight",
      ],
    })
    .use(rehypeStringify)
    .process(content);
  return { props: { frontMatter: data, post } };
};

export default PostDetail;

interface IPostDetail {
  post: string;
  frontMatter: Omit<IPost, "slug">;
}
