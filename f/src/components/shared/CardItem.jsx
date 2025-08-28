const CardItem = (props) => {
  console.log(props)

  return (
    <div className="flex flex-col gap-2.5 glass-effect p-1.5 rounded-xl">
      <img src={props.imageUrl} />
      <div className="flex flex-col gap-1 text-white font-[Unbounded]">
        <span className="text-lg">{props.title}</span>
        <span className="text-sm font-[500]">
          Floor:
          <a className="text-xs text-[#7348BF] font-black">
            {" "}
            {props.startPrice} ETH
          </a>
        </span>
      </div>
      <button className=" text-white font-[Jost] py-1 rounded-lg text-sm cursor-pointer bg-white/30 hover:bg-white/20 transition">
        Buy
      </button>
    </div>
  )
}

export default CardItem
