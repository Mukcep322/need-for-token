import {useState} from "react"

import AnimatedContent from "../ReactBits/Animations/AnimatedContent"

function Header() {
  const [toggle, setToggle] = useState(false)

  const actionToggle = () => {
    setToggle(!toggle)
    console.log(toggle)
  }

  return (
    <div className="relative w-full h-fit">
      {" "}
      <div className=" p-[15px] text-white flex items-center justify-center w-full h-fit fixed z-20">
        {/* bg */}
        <div className="bg-black w-full h-[80px] absolute z-1 opacity-70 backdrop-blur-3xl"></div>
        {/* main */}
        <div className="max-w-[1440px] flex justify-between w-full items-center z-10 h-fit">
          {/* left */}
          <div className="flex lg:gap-[60px] gap-[20px]">
            <a href="/" className=" text-xl lg:text-3xl font-[Unbounded]">
              Need For Token
            </a>
            {/* Nav */}
            <div className="font-[Jost] text-lg lg:text-2xl flex items-center gap-[15px] lg:gap[30px]">
              <a href="/Market">Market</a>
              <a href="/Leaderboard">Leaderboard</a>
            </div>
          </div>
          {/* right */}
          <div className="flex lg:gap-[25px] gap-[10px]">
            <input
              placeholder="CTRL K"
              className="rounded-[8px] px-2 py-0.5 bg-[url('./searchIcon.svg')] bg-no-repeat  bg-position-[left_0.5em_top_1em] text-right border border-gray-400 bg-[#151515]"
            />
            <img
              src="./settings.svg"
              className="lg:w-[40px] w-[25px] cursor-pointer hover:opacity-80 hover:rotate-3 transition"
              onClick={() => actionToggle()}
            />
          </div>
        </div>
      </div>
      {/* settings */}
      {toggle ? (
        <div className="absolute z-10 right-[240px] w-fit h-fit">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={true}
            duration={0.5}
            ease="power3.out"
            initialOpacity={1}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0}>
            <div className="text-white bg-[#373737] w-[300px] h-fit pt-[100px] rounded-b-2xl flex flex-col items-center px-5 py-3 gap-[20px] border border-gray-600">
              <span className="font-[Unbounded] text-2xl">Settings</span>
              <div className="flex flex-col justify-start w-full font-[Jost] text-xl">
                3123123
              </div>
              <hr class="w-90 border-gray-500 " />
              <div className="flex flex-col justify-start w-full font-[Jost] gap-[10px]">
                <a
                  href="/login"
                  className="text-xl rounded-full text-black font-medium  w-full flex items-center justify-center  py-2 px-4 bg-[#ffffff] cursor-pointer hover:bg-gray-200 transition">
                  Login
                </a>
                <a
                  href="/register"
                  className="text-xl rounded-full text-black font-medium  w-full flex items-center justify-center  py-2 px-4 bg-[#ffffff] cursor-pointer hover:bg-gray-200 transition">
                  Register
                </a>
              </div>
            </div>
          </AnimatedContent>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Header
