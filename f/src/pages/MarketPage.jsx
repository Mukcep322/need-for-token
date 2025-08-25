import LightRays from "../components/ReactBits/Backgrounds/LightRays"
import CardItem from "../components/shared/CardItem.jsx"

function MarketPage() {
  return (
    <div className="relative">
      <div
        style={{width: "100%", height: "600px", position: "fixed"}}
        className="z-0 fixed">
        <LightRays
          raysOrigin="top-center"
          raysColor="#fffff"
          raysSpeed={1.5}
          lightSpread={1}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays z-0"
        />
        <div className="z-10 absolute h-screen w-screen top-30 max-w-[1440px] right-0 mr-auto ml-auto left-0 flex flex-col">
          <div className="flex flex-col gap-4">
            <span className="text-white font-[Unbounded] text-lg">
              Popular Items
            </span>
            <div className="flex gap-2">
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketPage
