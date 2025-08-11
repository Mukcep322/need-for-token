import "../../Main.css"

import {Button} from "../ui/index"
import {motion} from "framer-motion"

import {useState} from "react"

export function Header() {
  const [isHover, setIsHovered] = useState(false)

  function setIsHover(value) {
    setIsHovered(value)
  }

  return (
    <motion.header
      className={`flex gap-20 items-center  pl-4 pr-2.5 py-5 rounded-full glass-effect justify-between h-[65px] relative transition-all duration-500 width-[360px] z-20`}
      whileHover={{
        width: 600,
        transition: {
          type: "tween",
          ease: "linear",
          duration: 0.3
        }
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      {/* logo */}
      <img src="/Logo.png" alt="logo" className="w-[200px]" />
      {/* hover me */}
      {isHover ? (
        ""
      ) : (
        <span
          className={`text-[#888888] font-[Jost] text-lg cursor-pointer hover:text-gray-300 pr-2 ${
            isHover ? "opacity-0" : "opacity-100"
          } transition-opacity duration-1000`}>
          Hover me!
        </span>
      )}

      {/* hrefs */}
      {!isHover ? (
        ""
      ) : (
        <>
          <div
            className={`flex gap-5 items-center font-[Jost] text-lg ${
              isHover ? "opacity-100" : "opacity-0"
            } transition-opacity duration-5000`}>
            <a href="/">Home</a>
            <a href="/Market">Market</a>
            <a href="/Leaderboard">Leaderboard</a>
          </div>
          {/* btn */}
          <Button Link={"/login"} Dark={true}>
            Login
          </Button>
        </>
      )}
    </motion.header>
  )
}

// import React, {useState} from "react"
// import {motion} from "framer-motion"

// export const Header = () => {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <motion.header
//       className={`flex justify-between items-center p-4 bg-gray-800 text-white transition-all duration-300  ${
//         isHovered ? "w-64" : "w-32"
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}>
//       <div className="text-lg font-bold">LOGO</div>
//       <div
//         className={`flex space-x-4 ${
//           isHovered ? "opacity-100" : "opacity-0"
//         } transition-opacity duration-1300`}>
//         <a href="#home" className="hover:underline">
//           Home
//         </a>
//         <a href="#market" className="hover:underline">
//           Market
//         </a>
//         <a href="#leaderboard" className="hover:underline">
//           Leaderboard
//         </a>
//       </div>
//       <button
//         className={`bg-blue-500 text-white px-4 py-2 rounded ${
//           isHovered ? "opacity-100" : "opacity-0"
//         } transition-opacity duration-300`}>
//         Login
//       </button>
//       <div
//         className={`absolute transition-opacity duration-300 ${
//           isHovered ? "opacity-0" : "opacity-100"
//         }`}>
//         hover me!
//       </div>
//     </motion.header>
//   )
// }
