import { SparklesCore } from "../ui/sparkles";

export default function SparklesBackgroundComponent() {
  return (
    <div className="fixed inset-0 -z-10">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.0}
        particleDensity={20}
        className="w-full h-full"
        particleColor="#d2d2d2"
      />
    </div>
  );
}
