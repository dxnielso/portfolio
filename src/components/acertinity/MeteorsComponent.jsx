import { Meteors } from "../ui/meteors";

export function MeteorsComponent({ children }) {
  return (
    <div className="relative bg-transparent border h-full overflow-hidden ">
      {children}
      <Meteors number={20} />
    </div>
  );
}
