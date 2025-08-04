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
        <img
          src="./imgInMain.png"
          className="absolute bottom-0 left-0 w-[30vw]"
        />
        <div className="flex flex-col absolute right-[240px] bottom-[60px] z-10 gap-[150px] items-end">
          <span className="text-white text-5xl font-[Jost] font-light text-right">
            Lorem ipsum dolor <br /> sit amet consectetur.Lorem <br />
            ipsum dolor sit amet <br />
            consectetur.
          </span>
          <a
            href="/auth/register"
            className="bg-[#83EA05] text-black font-[Unbounded] w-fit rounded-full text-3xl px-10 py-5">
            Start Trading
          </a>
        </div>
      </div>
    </>
  )
}

export default App
