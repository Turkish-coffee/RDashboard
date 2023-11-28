import './App.css'
import { Card, Header } from './components'

export function App() {
  return (
    <div className="bg-slate-800 text-white">
      <Header />
      Hello world!
      <div className="bg-white flex flex-row justify-center w-full">
         <div className="bg-white overflow-hidden w-[237px] h-[277px]">
           <div className="h-[279px] bg-[#3a2775] rounded-[20px] shadow-[0px_2px_6px_#00000040]">
              <div className="inline-flex flex-col items-center gap-px px-[11px] py-0 relative top-[180px] left-[27px]">
                 <div className="relative w-[161px] h-[39px] mt-[-1.00px] [font-family:'Chivo-Regular',Helvetica] font-normal text-[#b6eada] text-[20px] tracking-[0] leading-[normal]">
                    Drone en panne
                 </div>
                <div className="relative w-fit [text-shadow:0px_4px_4px_#00000040] opacity-[0.76] [font-family:'Chivo-Regular',Helvetica] font-normal text-[#5b8fb9] text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                    10%
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>


    
  )
}



export function Dashboard() {
  return (
      <div className="bg-white flex flex-row justify-center w-full">
          <div className="bg-white w-[1440px] h-[677px] relative">
                  <div className="absolute w-[109px] top-[23px] left-[52px] [font-family:'Chivo-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
                      Header
                  </div>
              </div>
              <div className="absolute w-[247px] h-[171px] top-[179px] left-[135px] rounded-[20px] shadow-[0px_2px_6px_#00000040] [background:linear-gradient(180deg,rgb(86.49,103.34,255)_0%,rgb(35,150,239)_100%)]">
                  <div className="absolute w-[48px] h-[48px] top-[18px] left-[48px] bg-[#2f54aa] rounded-[12px]">
                      <img
                          className="absolute w-[28px] h-[24px] top-[12px] left-[10px]"
                          alt="Kitchen cooker"
                          src="kitchen-cooker-utensils-icon.svg"
                      />
                  </div>
                  <div className="absolute top-[97px] left-[48px] [font-family:'Chivo-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Dronne en panne
                  </div>
                  <p className="absolute top-[125px] left-[48px] [text-shadow:0px_4px_4px_#00000040] opacity-[0.76] [font-family:'Chivo-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      <span className="text-[#f31010]">10</span>
                      <span className="text-[#f31010]">%</span>
                  </p>
              </div>
              <div className="absolute w-[247px] h-[171px] top-[179px] left-[437px] rounded-[20px] shadow-[0px_2px_6px_#00000040] [background:linear-gradient(180deg,rgb(86.49,103.34,255)_0%,rgb(35,150,239)_100%)]">
                  <div className="absolute w-[48px] h-[48px] top-[18px] left-[48px] bg-[#2f54aa] rounded-[12px]">
                      <img className="absolute w-[28px] h-[24px] top-[12px] left-[10px]" alt="Kitchen cooker" src="image.svg" />
                  </div>
                  <div className="absolute top-[97px] left-[48px] [font-family:'Chivo-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Dronne en panne
                  </div>
                  <p className="absolute top-[125px] left-[48px] [text-shadow:0px_4px_4px_#00000040] opacity-[0.76] [font-family:'Chivo-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      <span className="text-[#f31010]">10</span>
                      <span className="text-[#f31010]">%</span>
                  </p>
              </div>
              <div className="absolute w-[247px] h-[171px] top-[179px] left-[739px] rounded-[20px] shadow-[0px_2px_6px_#00000040] [background:linear-gradient(180deg,rgb(86.49,103.34,255)_0%,rgb(35,150,239)_100%)]">
                  <div className="absolute w-[48px] h-[48px] top-[18px] left-[48px] bg-[#2f54aa] rounded-[12px]">
                      <img
                          className="absolute w-[28px] h-[24px] top-[12px] left-[10px]"
                          alt="Kitchen cooker"
                          src="kitchen-cooker-utensils-icon-2.svg"
                      />
                  </div>
                  <div className="absolute top-[97px] left-[48px] [font-family:'Chivo-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Dronne en panne
                  </div>
                  <p className="absolute top-[125px] left-[48px] [text-shadow:0px_4px_4px_#00000040] opacity-[0.76] [font-family:'Chivo-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      <span className="text-[#f31010]">10</span>
                      <span className="text-[#f31010]">%</span>
                  </p>
              </div>
              <div className="absolute w-[247px] h-[171px] top-[179px] left-[1041px] rounded-[20px] shadow-[0px_2px_6px_#00000040] [background:linear-gradient(180deg,rgb(86.49,103.34,255)_0%,rgb(35,150,239)_100%)]">
                  <div className="absolute w-[48px] h-[48px] top-[18px] left-[48px] bg-[#2f54aa] rounded-[12px]">
                      <img
                          className="absolute w-[28px] h-[24px] top-[12px] left-[10px]"
                          alt="Kitchen cooker"
                          src="kitchen-cooker-utensils-icon-3.svg"
                      />
                  </div>
                  <div className="absolute top-[97px] left-[48px] [font-family:'Chivo-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Dronne en panne
                  </div>
                  <p className="absolute top-[125px] left-[48px] [text-shadow:0px_4px_4px_#00000040] opacity-[0.76] [font-family:'Chivo-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      <span className="text-[#f31010]">10</span>
                      <span className="text-[#f31010]">%</span>
                  </p>
              </div>
              <div className="absolute w-[247px] h-[171px] top-[394px] left-[294px] rounded-[20px] shadow-[0px_2px_6px_#00000040] [background:linear-gradient(180deg,rgb(86.49,103.34,255)_0%,rgb(35,150,239)_100%)]">
                  <div className="absolute w-[48px] h-[48px] top-[18px] left-[48px] bg-[#2f54aa] rounded-[12px]">
                      <img
                          className="absolute w-[28px] h-[24px] top-[12px] left-[10px]"
                          alt="Kitchen cooker"
                          src="kitchen-cooker-utensils-icon-4.svg"
                      />
                  </div>
                  <div className="absolute top-[97px] left-[48px] [font-family:'Chivo-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Dronne en panne
                  </div>
                  <p className="absolute top-[125px] left-[48px] [text-shadow:0px_4px_4px_#00000040] opacity-[0.76] [font-family:'Chivo-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      <span className="text-[#f31010]">10</span>
                      <span className="text-[#f31010]">%</span>
                  </p>
              </div>
              <div className="absolute w-[247px] h-[171px] top-[394px] left-[596px] rounded-[20px] shadow-[0px_2px_6px_#00000040] [background:linear-gradient(180deg,rgb(86.49,103.34,255)_0%,rgb(35,150,239)_100%)]">
                  <div className="absolute w-[48px] h-[48px] top-[18px] left-[48px] bg-[#2f54aa] rounded-[12px]">
                      <img
                          className="absolute w-[28px] h-[24px] top-[12px] left-[10px]"
                          alt="Kitchen cooker"
                          src="kitchen-cooker-utensils-icon-5.svg"
                      />
                  </div>
                  <div className="absolute top-[97px] left-[48px] [font-family:'Chivo-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Dronne en panne
                  </div>
                  <p className="absolute top-[125px] left-[48px] [text-shadow:0px_4px_4px_#00000040] opacity-[0.76] [font-family:'Chivo-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      <span className="text-[#f31010]">10</span>
                      <span className="text-[#f31010]">%</span>
                  </p>
              </div>
              <div className="absolute w-[247px] h-[171px] top-[394px] left-[898px] rounded-[20px] shadow-[0px_2px_6px_#00000040] [background:linear-gradient(180deg,rgb(86.49,103.34,255)_0%,rgb(35,150,239)_100%)]">
                  <div className="absolute w-[48px] h-[48px] top-[18px] left-[48px] bg-[#2f54aa] rounded-[12px]">
                      <img
                          className="absolute w-[28px] h-[24px] top-[12px] left-[10px]"
                          alt="Kitchen cooker"
                          src="kitchen-cooker-utensils-icon-6.svg"
                      />
                  </div>
                  <div className="absolute top-[97px] left-[48px] [font-family:'Chivo-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Dronne en panne
                  </div>
                  <p className="absolute top-[125px] left-[48px] [text-shadow:0px_4px_4px_#00000040] opacity-[0.76] [font-family:'Chivo-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      <span className="text-[#f31010]">10</span>
                      <span className="text-[#f31010]">%</span>
                  </p>
              </div>
          </div>
  );
};


export  const Frame = (): JSX.Element => {
    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white overflow-hidden w-[237px] h-[277px]">
                <div className="h-[279px] bg-[#3a2775] rounded-[20px] shadow-[0px_2px_6px_#00000040]">
                    <div className="inline-flex flex-col items-center gap-px px-[11px] py-0 relative top-[180px] left-[27px]">
                        <div className="relative w-[161px] h-[39px] mt-[-1.00px] [font-family:'Chivo-Regular',Helvetica] font-normal text-[#b6eada] text-[20px] tracking-[0] leading-[normal]">
                            Drone en panne
                        </div>
                        <div className="relative w-fit [text-shadow:0px_4px_4px_#00000040] opacity-[0.76] [font-family:'Chivo-Regular',Helvetica] font-normal text-[#5b8fb9] text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                            10%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



