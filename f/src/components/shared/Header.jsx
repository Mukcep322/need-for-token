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
              <div className="w-[78px] flex justify-end ">
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
              </div>
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
