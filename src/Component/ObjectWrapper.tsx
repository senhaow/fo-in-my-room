import { DragControls, useGLTF } from "@react-three/drei";

interface InteractiveModelLoader {
  glbPath: string;
}

export const InteractiveModelLoader = ({ glbPath }: InteractiveModelLoader) => {
  const { scene } = useGLTF(glbPath);

  return (
    <DragControls axisLock="y">
      <primitive object={scene} />
    </DragControls>
  );
};
