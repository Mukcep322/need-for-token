import RippleGrid from "../components/ReactBits/Backgrounds/RippleGrid.jsx"

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center  relative overflow-hidden">
      {/* Ripple Grid Background */}
      <div style={{position: "absolute", height: "1000px", overflow: "hidden"}}>
        <RippleGrid
          enableRainbow={false}
          gridColor="#5227FF"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>

      {/* Login Form */}
      <div className="w-full max-w-lg p-8 bg-white/5 backdrop-blur-sm rounded-lg z-10 border border-white/10 ">
        <h1 className="text-2xl text-white mb-8 text-center font-[Unbounded]">
          Register
        </h1>

        <form className="space-y-6 font-[Unbounded]">
          <div>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-transparent text-white border-b-1 border-white focus:border-gray-200 outline-0 "
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="username"
              id="username"
              className="w-full px-4 py-2 bg-transparent text-white border-b-1 border-white focus:border-gray-200 outline-0 "
              placeholder="Username"
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-transparent text-white border-b-1 border-white focus:border-gray-200 outline-0 "
              placeholder="Password"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-transparent text-white border-b-1 border-white focus:border-gray-200 outline-0 "
              placeholder="Repeat password"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 py-2 bg-white hover:bg-white/80 rounded-md text-black font-medium transition-colors cursor-pointer">
              Register
            </button>
            <a
              href="/login"
              className="flex-1 py-2 bg-[#363636] hover:bg-[#363636]/80 rounded-md text-white font-medium transition-colors cursor-pointer text-center">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
