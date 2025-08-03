function Header() {
  return (
    <>
      <div className=" p-[15px] text-white flex items-center justify-center w-full h-fit fixed z-20">
        {/* bg */}
        <div className="bg-black w-full h-[80px] absolute z-1 opacity-70 backdrop-blur-xs"></div>
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
            <input placeholder="CTRL K" />
            <img src="./settings.svg" className="lg:w-[40px] w-[25px]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
