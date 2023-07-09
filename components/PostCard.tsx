import Link from "next/link";
import { Badge } from "./Badge";

export const PostCard = ({
  title,
  author,
  summary,
  tags,
  createdAt,
  updatedAt,
  slug,
}: PostCardProps) => {
  return (
    <Link href={`/${slug}`}>
      <a className="cursor-pointer flex justify-between">
        <article className="space-y-3">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="px-3">{summary}</p>
          <ul className="flex space-x-3">
            {tags.map((tag, idx) => (
              <li key={tag + idx}>
                <Badge label={tag} />
              </li>
            ))}
          </ul>
        </article>
        <aside className="self-end">
          <p className="font-semibold">{author}</p>
          <p>{createdAt === updatedAt ? createdAt : updatedAt}</p>
        </aside>
      </a>
    </Link>
  );
};

interface PostCardProps {
  title: string;
  author: "Real-Bird";
  summary: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  slug: string;
}
