export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="w-full h-8">
      <h1 className="font-extrabold font-serif text-center text-4xl pt-2">
        {title ?? "RB's Blog"}
      </h1>
    </header>
  );
};

interface HeaderProps {
  title: string;
}
