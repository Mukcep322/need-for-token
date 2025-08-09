import "./glass.css"
import "../../Main.css"
import {Container} from "./index"
import {BigBtnDark} from "../ui/index"

import {useState} from "react"

export function Header() {
  const [isHover, setIsHoverState] = useState(false)

  function setIsHover(value) {
    setIsHoverState(value)
  }

  return (
    <header>
      <Container className="flex items-center text-white w-fit">
        <div
          className="flex gap-20 items-center  pl-4 pr-2.5 py-5 rounded-full glass-effect justify-between "
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}>
          {/* logo */}
          <span className="font-[Unbounded] font-semibold text-2xl text-white">
            Need For Token
          </span>
          {/* hover me */}
          {isHover ? (
            ""
          ) : (
            <span className="text-[#888888] font-[Jost] text-lg cursor-pointer hover:text-gray-300 transition">
              Hover me!
            </span>
          )}

          {/* hrefs */}
          {!isHover ? (
            ""
          ) : (
            <>
              <div className="flex gap-5 items-center font-[Jost] text-lg">
                <a href="/">Home</a>
                <a href="/Market">Market</a>
                <a href="/Leaderboard">Leaderboard</a>
              </div>
              {/* btn */}
              <BigBtnDark Link={"/login"}>Login</BigBtnDark>
            </>
          )}
        </div>
      </Container>
    </header>
  )
}
