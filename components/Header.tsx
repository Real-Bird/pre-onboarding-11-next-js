export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="header">
      <h1>{title ?? "RB's Blog"}</h1>
    </header>
  );
};

interface HeaderProps {
  title: string;
}
