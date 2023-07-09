import { readdirSync } from "fs";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import matter from "gray-matter";
import { IPost } from ".";
import remarkGfm from "remark-gfm";
import { Layout } from "../components";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

const PostDetail: NextPage<IPostDetail> = ({ frontMatter, post }) => {
  return (
    <Layout title={frontMatter.title}>
      <article className="w-full">
        <div dangerouslySetInnerHTML={{ __html: post }} />
      </article>
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
    .use(remarkHtml)
    .process(content);
  return { props: { frontMatter: data, post } };
};

export default PostDetail;

interface IPostDetail {
  post: string;
  frontMatter: Omit<IPost, "slug">;
}
