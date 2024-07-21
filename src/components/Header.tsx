import React from "react"

const Header: React.FC = ()=> {
  return (
    <div className="container mx-auto">
        <header className="flex items-center justify-end pr-28">
            <div className="flex flex-col gap-3 p-9 bg-[#FFF3E3] rounded-xl w-[623px]">
                <span className=" tracking-[.3em]">New Arrival</span>
                <h1 className=" text-[#B88E2F] text-[52px] leading-none  font-bold">Discover Our <br />New Collection</h1>
                <p className="font-medium mb-10 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="w-1/3 bg-[#B88E2F] p-5 text-white">BUY NOW</button>
            </div>
        </header>
    </div>
  )
}

export default Header