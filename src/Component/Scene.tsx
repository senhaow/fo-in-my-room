import { Canvas } from "@react-three/fiber";
import { InteractiveModelLoader } from "./ObjectWrapper";
import { CameraControls, Plane, PresentationControls } from "@react-three/drei";
import { PostProcessor } from "./PostProcessor";

export const Scene = () => {
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
      <pointLight decay={0} intensity={Math.PI} />
      <InteractiveModelLoader glbPath="/model/tv.glb" />
      {/*Floor and wall*/}
      <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} args={[100, 100]} receiveShadow>
        <meshStandardMaterial attach="material" color="gray" />
      </Plane>
      <Plane rotation={[0, 0, 0]} position={[0, 3, -5]} args={[10, 6]} receiveShadow>
        <meshStandardMaterial attach="material" color="white" />
      </Plane>
      <Plane rotation={[0, Math.PI / 2, 0]} position={[-5, 3, 0]} args={[10, 6]} receiveShadow>
        <meshStandardMaterial attach="material" color="white" />
      </Plane>
      {/* <CameraControls /> */}
      {/* <PostProcessor /> */}
    </Canvas>
  );
};
