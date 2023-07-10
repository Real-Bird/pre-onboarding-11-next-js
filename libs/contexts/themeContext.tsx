import {
  type Dispatch,
  type ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

const ThemeContext = createContext<ThemeContextType>({
  theme: "",
  setTheme: () => null,
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      matchMedia("(prefers-color-scheme: dark)").matches
        ? setTheme("dark")
        : setTheme("light");
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<string>;
}

interface ThemeProviderProps {
  children: ReactNode;
}
