import React from 'react'

const Resources = () => {
  return (
    <div className="bg-black text-white pt-24 flex flex-col gap-12">
        <div className="flex flex-col w-[1110px] mx-auto ">
            <div className=" text-[5.3rem] font-medium">
            Resources
            </div>
            <div className=" self-end w-[480px] text-xl">
            Explore our curated collection of tutorials, articles, and tools for web3 development.            </div>
        </div>

        <div className="flex flex-col">
            <div className="border-gray-400 border-y-2 px-20 flex justify-between py-[1.6rem]">
                    <div className="text-[2rem]">Cryptocurrency & Tokenomics Explained</div>
                    <div className="">
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                    </svg>
                    </div>
            </div>
            <div className="border-gray-400 border-b-2 px-20 flex justify-between py-[1.6rem]">
                    <div className="text-[2rem]">Open-Source Tools for Developers</div>
                    <div className="">
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                    </svg>
                    </div>
             </div>
            <div className="border-gray-400 border-b-2 px-20 flex justify-between py-[1.6rem]">
                    <div className="text-[2rem]">Decentralized Applications (DApps) Showcase</div>
                    <div className="">
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                    </svg>
                    </div>
            </div>
            <div className="border-gray-400 border-b-2 px-20 flex justify-between py-[1.6rem]">
                    <div className="text-[2rem]">Blockchain Whitepapers and Guides</div>
                    <div className="">
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 34.5L35.5 2M35.5 2V33.2M35.5 2H4.3" stroke="white" stroke-width="3.5" stroke-linecap="square"/>
                    </svg>
                    </div>
            </div>
        </div>
        <button className=" border-white rounded-3xl border-[1px] self-center mt-12 px-[1.7rem] flex items-center  py-[0.35rem] text-[15px] font-light  ">REGISTER TO GET MORE RESOURCES</button>
    </div>
  )
}

export default Resources