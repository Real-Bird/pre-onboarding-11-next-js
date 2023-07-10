export const Badge = ({ label }: BadgeProps) => {
  return <p>{label}</p>;
};

interface BadgeProps {
  label: string;
}
