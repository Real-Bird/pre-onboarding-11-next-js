import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@picocss/pico";
import "prismjs/themes/prism-tomorrow.css";
import ThemeProvider from "../libs/contexts/themeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
