export const Badge = ({ label }: BadgeProps) => {
  return (
    <p className="bg-black text-white px-1 py-0.5 rounded-md text-sm">
      {label}
    </p>
  );
};

interface BadgeProps {
  label: string;
}
