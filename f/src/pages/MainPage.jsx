import "../Main.css"

import Orb from "../components/ReactBits/Backgrounds/Orb"
import {Link} from "../components/shared/index"

function App() {
  return (
    <div className="relative">
      {/* Orb background */}{" "}
      <div
        style={{width: "100%", height: "800px", position: "absolute"}}
        className="lg:pt-20 pt-5 z-50 ">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      {/* Content */}
      <div className="z-40 w-screen h-screen flex flex-col items-center justify-center">
        <div className="z-60 flex flex-col gap-10 text-white items-center">
          {/* top text */}
          <div className="z-60 flex flex-col gap-2 text-white items-center font-[Unbounded] text-xl ">
            <span>Need For Token</span>
            <span>Is</span>
            <div className="glass-effect w-fit px-5 py-2.5 z-1 text-sm">
              New NFT Market
            </div>
          </div>
          {/* middle text */}
          <div className="w-sm text-center font-[jost] text-lg">
            Lorem ipsum dolor sit amet consectetur. Amet habitant ac sed magna.
            Eget condimentum euismod dignissim integer feugiat amet orci. Lacus
            nisl id ornare sed.
          </div>
          {/* Button */}
          <Link
            className={
              "big-light-button font-[Jost] text-base hover:text-black"
            }
            to={"/login"}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
