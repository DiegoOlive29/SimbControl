export type labelColors = "green" | "orange" | "red";

const COLORS: Record<labelColors, string> = {
  orange: "bg-orange-light text-orange-dark",
  green: "bg-green-light text-green-dark",
  red: "bg-red-light text-red-dark",
};

interface Props {
  label: string;
  color: labelColors;
}
const Label = ({ color, label }: Props) => {
  return (
    <div className={`${COLORS[color]} rounded-full py-2 px-3 w-min`}>
      <p className="font-roboto text-xs font-medium">{label}</p>
    </div>
  );
};

export default Label;
