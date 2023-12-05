import './App.css'

import { Card, Header } from './components'




export  function Dashboard() {
    return (
            <div className="bg-[#363062] w-screen h-screen justify-center ">
                <div className="w-[247px] h-[171px] top-[179px] left-[135px] shadow-[0px_2px_6px_#00000040] [background:linear-gradient(180deg,rgb(86.49,103.34,255)_0%,rgb(35,150,239)_100%)]  rounded-[20px]">
                    <div className="absolute top-[97px] left-[48px] [font-family:'Chivo-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap ">
                        Dronne en panne
                    </div>
                    <div className="absolute top-[125px] left-[48px] [text-shadow:0px_4px_4px_#00000040] opacity-[0.76] [font-family:'Chivo-Regular',Helvetica] font-normal text-[#f31010] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                        10%
                    </div>
                    <div className="absolute w-[48px] h-[48px] top-[18px] left-[48px] bg-[#2f54aa] rounded-[12px]" />
                </div>
                <div className="  w-[1271px] h-[64px] top-[30px] bg-[#f5e8c7] shadow-[0px_4px_4px_#00000040] absolute rounded-[15px]">
                    <div className="absolute w-[109px] top-[24px] left-[37px] [font-family:'Chivo-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Header
                    </div>
                </div>
            </div>
    
    );
};






