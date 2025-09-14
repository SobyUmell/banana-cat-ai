import { useProgress } from "@react-three/drei";

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex items-center">
        <img
          src="/bananacat.png"
          alt="yippeee"
          className="w-[200px] animate-bounce"
        />
        <h1 className="animate-pulse">Loading silly stuff... {progress}% </h1>
      </div>
    </div>
  );
};
