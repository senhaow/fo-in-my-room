import { Bloom, DepthOfField, EffectComposer, Scanline, SSR, Vignette } from "@react-three/postprocessing";

export const PostProcessor = (): JSX.Element => {
  const props = {
    enabled: true,
    temporalResolve: true,
    STRETCH_MISSED_RAYS: true,
    USE_MRT: true,
    USE_NORMALMAP: true,
    USE_ROUGHNESSMAP: true,
    ENABLE_JITTERING: true,
    ENABLE_BLUR: true,
    temporalResolveMix: 0.9,
    temporalResolveCorrectionMix: 0.4,
    maxSamples: 0,
    resolutionScale: 1,
    blurMix: 0.2,
    blurExponent: 10,
    blurKernelSize: 1,
    rayStep: 0.5,
    intensity: 1,
    maxRoughness: 1,
    jitter: 0.3,
    jitterSpread: 0.25,
    jitterRough: 0.1,
    roughnessFadeOut: 1,
    rayFadeOut: 0,
    MAX_STEPS: 20,
    NUM_BINARY_SEARCH_STEPS: 6,
    maxDepthDifference: 10,
    maxDepth: 1,
    thickness: 10,
    ior: 1.45,
  };

  return (
    <EffectComposer>
      <Bloom luminanceThreshold={1.0} mipmapBlur luminanceSmoothing={0.5} intensity={1} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
      <Scanline />
      <DepthOfField target={[0, 0, 1]} focalLength={0.3} bokehScale={15} height={700} />
      <SSR {...props} />
    </EffectComposer>
  );
};
