import "../Main.css"

import Orb from "../components/ReactBits/Backgrounds/Orb"
import {Button} from "../components/ui/Button"

function App() {
  return (
    <div className="relative pt-40">
      <div
        style={{
          width: "100%",
          height: "800px",
          position: "relative",
          zIndex: "20"
        }}>
        <Orb
          hoverIntensity={0.85}
          rotateOnHover={true}
          hue={0}
          force
          HoverState={false}
        />
      </div>

      <div className="text-white absolute top-100 left-0 right-0 ml-auto mr-auto text-center font-[Unbounded] text-4xl flex flex-col gap-6 items-center">
        {/* Top text */}
        <div>Need For Token</div>
        <div className="text-3xl">IS</div>

        <div className="text-xl glass-effect w-fit px-5 py-2.5 z-1">
          New NFT Market
        </div>
        {/* Middle text */}
        <div className="w-[500px] text-white font-[Jost] text-3xl mt-15 font-normal">
          Lorem ipsum dolor sit amet consectetur. Amet habitant ac sed magna.
          Eget condimentum euismod dignissim integer feugiat amet orci. Lacus
          nisl id ornare sed.
        </div>
        {/* Button */}
        <Button Dark={false} Link="/login" className=" z-30 mt-20">
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default App
