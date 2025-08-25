import "../../Main.css"
import {motion} from "framer-motion"
import {Button} from "../ui/index"
import {Link} from "../ui/index"

import {useState} from "react"

export function Header() {
  const [isAuth, setAuth] = useState(false)

  const [isHovered, setHover] = useState(false)

  return (
    <motion.header
      className="flex gap-12 text-white items-center h-15 bg-white/15 px-5 py-2 backdrop-blur-sm rounded-full border border-white/10 overflow-hidden justify-center"
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      initial={{
        width: "344px"
      }}
      animate={{
        width: isHovered ? "645px" : "344px"
      }}>
      {/* Logo */}
      <Link to="/">
        <img src="./Logo.png" alt="logo" className="w-[12em]" />
      </Link>

      {isHovered ? (
        ""
      ) : (
        <span className="text-[#888888] font-[Jost] text-sm whitespace-nowrap">
          Hover me!
        </span>
      )}

      {isHovered ? (
        <>
          <div className="flex gap-6 items-center  whitespace-nowrap">
            <Link to="/Create">Create token</Link>
            <Link to="/Market">Market</Link>
            <Link to="/Leaderboard">Leaderboard</Link>
          </div>

          <div className="flex gap-3 items-center">
            {isAuth ? (
              <Link to="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user-icon lucide-user">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Link>
            ) : (
              <Button Link="/login" Dark={true}>
                Login
              </Button>
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </motion.header>
  )
}

// export function Header() {
//   const [isHover, setIsHovered] = useState(false)

//   function setIsHover(value) {
//     setIsHovered(value)
//   }

//   return (
//     <motion.header
//       className={`flex gap-20 items-center  pl-4 pr-2.5 py-5 rounded-full glass-effect justify-between h-[65px] relative transition-all duration-500 width-[360px] z-20`}
//       whileHover={{
//         width: 800,
//         transition: {
//           type: "tween",
//           ease: "linear",
//           duration: 0.3
//         }
//       }}
//       onMouseEnter={() => setIsHover(true)}
//       onMouseLeave={() => setIsHover(false)}>
//       {/* logo */}
//       <img src="/Logo.png" alt="logo" className="w-[200px]" />
//       {/* hover me */}
//       {isHover ? (
//         ""
//       ) : (
//         <span
//           className={`text-[#888888] font-[Jost] text-lg cursor-pointer hover:text-gray-300 pr-2 ${
//             isHover ? "opacity-0" : "opacity-100"
//           } transition-opacity duration-1000`}>
//           Hover me!
//         </span>
//       )}

//       {/* hrefs */}
//       {!isHover ? (
//         ""
//       ) : (
//         <>
//           <div
//             className={`flex gap-5 items-center font-[Jost] text-lg ${
//               isHover ? "opacity-100" : "opacity-0"
//             } transition-opacity duration-5000`}>
//             <a href="/">Home</a>
//             <a href="/Market">Market</a>
//             <a href="/Leaderboard">Leaderboard</a>
//           </div>
//           {/* btn */}
//           <Button Link={"/login"} Dark={true}>
//             Login
//           </Button>
//         </>
//       )}
//     </motion.header>
//   )
// }
