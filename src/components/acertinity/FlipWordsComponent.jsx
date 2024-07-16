import { FlipWords } from "../ui/flip-words";

export default function FlipWordsComponent() {
  const words = ["complejas.", "escalables.", "modernas."];

  return (
    <p class="text-base font-light mb-4">
      Soy un desarrollador de software especializado en desarrollo frontend y
      backend para aplicaciones web <FlipWords words={words} />
    </p>
  );
}
