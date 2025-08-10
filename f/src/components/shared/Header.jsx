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
          className="flex gap-20 items-center  pl-4 pr-2.5 py-5 rounded-full glass-effect justify-between h-[65px]"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}>
          {/* logo */}
          <span className="font-[Unbounded] font-semibold text-3xl text-white">
            Need For Token
          </span>
          {/* hover me */}
          {isHover ? (
            ""
          ) : (
            <span className="text-[#888888] font-[Jost] text-lg cursor-pointer hover:text-gray-300 transition pr-2">
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

// import React, {useState} from "react"
// import {motion} from "framer-motion"

// import {Container} from "./index"

// export const Header = () => {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <Container className="flex items-center text-white w-fit">
//       <motion.header
//         className={`flex justify-between items-center p-4 bg-gray-800 text-white transition-all duration-300 ${
//           isHovered ? "w-64" : "w-32"
//         }`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}>
//         <div className="text-lg font-bold">LOGO</div>
//         <div
//           className={`flex space-x-4 ${
//             isHovered ? "opacity-100" : "opacity-0"
//           } transition-opacity duration-300`}>
//           <a href="#home" className="hover:underline">
//             Home
//           </a>
//           <a href="#market" className="hover:underline">
//             Market
//           </a>
//           <a href="#leaderboard" className="hover:underline">
//             Leaderboard
//           </a>
//         </div>
//         <button
//           className={`bg-blue-500 text-white px-4 py-2 rounded ${
//             isHovered ? "opacity-100" : "opacity-0"
//           } transition-opacity duration-300`}>
//           Login
//         </button>
//         <div
//           className={`absolute transition-opacity duration-300 ${
//             isHovered ? "opacity-0" : "opacity-100"
//           }`}>
//           hover me!
//         </div>
//       </motion.header>
//     </Container>
//   )
// }
