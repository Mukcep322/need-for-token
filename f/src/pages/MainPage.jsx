import "../Main.css"
import FaultyTerminal from "../ReactBits/Backgrounds/FaultyTerminal/FaultyTerminal.jsx"

function App() {
  return (
    <>
      <div className="w-full h-[100vh] relative">
        <FaultyTerminal
          scale={2.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={1}
          curvature={0.1}
          tint="#32502D"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
          className={"absolute"}
        />
        <div className="absolute w-full h-fit bottom-0  flex justify-between items-end">
          <img src="../public/imgInMain.png" />
          <div className="pr-[100px] pb-[30px] lg:pb-[60px] flex flex-col gap-[200px] ">
            <a className="text-white text-4xl  font-[Jost] font-light">
              Lorem ipsum dolor sit
              <br /> amet consectetur.Lorem
              <br /> ipsum dolor sit amet
              <br />
              consectetur.
            </a>
            <a
              href="/Market"
              className="font-[Unbounded] text-xl px-12 py-4 bg-[#8CFF00] w-fit rounded-full cursor-pointer hover:bg-[#72CF00] transition">
              Start Trading
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
