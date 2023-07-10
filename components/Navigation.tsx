import Link from "next/link";
import { useRouter } from "next/router";
import { Themes } from "./Themes";
import { useThemeContext } from "../libs/contexts/themeContext";

export const Navigation = () => {
  const router = useRouter();
  const { theme } = useThemeContext();
  const themeClass = [theme === "light" ? "" : "outline ", "contrast"].join("");
  return (
    <nav className="navbar">
      <ul>
        <li>
          <nav aria-label="breadcrumb">
            <ul>
              <li>
                {router.pathname === "/" ? (
                  <a role="button" className={themeClass}>
                    RB&apos;s Blog
                  </a>
                ) : (
                  <Link href="/">
                    <a role="button">RB&apos;s Blog</a>
                  </Link>
                )}
              </li>
              {router.query.slug ? (
                <li>
                  <a role="button" className={themeClass}>
                    {router.query.slug}
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        </li>
      </ul>
      <ul>
        <li>
          <Themes />
        </li>
      </ul>
    </nav>
  );
};
