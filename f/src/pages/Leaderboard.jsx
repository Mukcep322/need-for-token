import LightRays from "../ReactBits/Backgrounds/LightRays/LightRays.jsx"

function Leaderboard() {
  return (
    <>
      <div className="w-full h-[100vh] relative bg-[#040212]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#fffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
    </>
  )
}

export default Leaderboard
