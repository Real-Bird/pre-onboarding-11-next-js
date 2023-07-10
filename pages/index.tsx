import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import type { GetStaticProps, NextPage } from "next";
import { Layout, PostCard } from "../components";

const Home: NextPage<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <Layout title="HOME">
      <section className="grid">
        {posts.map((post) => (
          <div key={post.no}>
            <PostCard {...post} />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = readdirSync("_posts").map((file) => {
    const content = readFileSync(`_posts/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
  });
  return {
    props: { posts: blogPosts.reverse() },
  };
};

export default Home;

export interface IPost {
  no: number;
  title: string;
  author: "Real-Bird";
  summary: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  slug: string;
}
