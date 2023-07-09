import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import type { GetStaticProps, NextPage } from "next";
import { Layout, PostCard } from "../components";

const Home: NextPage<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <Layout title="HOME">
      <ul className="w-full space-y-2">
        {posts.map((post) => (
          <li
            key={post.no}
            className="w-full px-3 py-1 border-2 border-black rounded-lg shadow-md active:shadow-none shadow-slate-600 hover:bg-gray-100 even:bg-gray-300 even:hover:bg-gray-100"
          >
            <PostCard {...post} />
          </li>
        ))}
      </ul>
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
