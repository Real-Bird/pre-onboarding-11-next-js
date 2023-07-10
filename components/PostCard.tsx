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
    <article>
      <header>
        <Link href={`/${slug}`}>
          <a role="article">
            <h2>{title}</h2>
          </a>
        </Link>
      </header>
      <p>{summary}</p>
      <footer>
        <nav>
          <ul>
            <nav aria-label="breadcrumb">
              <ul>
                {tags.map((tag, idx) => (
                  <li key={tag + idx}>
                    <Badge label={tag} />
                  </li>
                ))}
              </ul>
            </nav>
          </ul>
          <ul>
            <aside>
              <nav>
                <ul>
                  <li>{author}</li>
                  <li>{createdAt === updatedAt ? createdAt : updatedAt}</li>
                </ul>
              </nav>
            </aside>
          </ul>
        </nav>
      </footer>
    </article>
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
