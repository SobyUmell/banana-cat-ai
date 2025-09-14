import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { BananaCatModel } from "../../../shared/model";
import { Loader as LoaderScreen } from "../../../shared/ui";
import { Sphere } from "@react-three/drei";
import { useStore } from "../../../shared/lib/chat.store";

export const BananaCatCanvas = () => {
  const talking = useStore((state) => state.talking);

  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 5, -15] }}>
        <color attach="background" args={["#8ecae6"]} />
        <Suspense fallback={<LoaderScreen />}>
          <BananaCatModel talking={talking} position={[0, 0, 0]} />
        </Suspense>
        <Sphere
          scale={[100, 0, 100]}
          position={[0, 0, 0]}
          material-color="green"
        />
        <directionalLight
          intensity={3}
          lookAt={[0, 0, 0]}
          position={[0, 5, -20]}
        />
      </Canvas>
    </div>
  );
};
