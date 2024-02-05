
import Sidebar from "../Component/Navigation_Bar"
import Address from "../Component/Address_Card"
import Add from "../Images/add.png"

export default function Addresses(){
    return (

        <div className="flex flex-row gap-6 mt-20 mid:justify-center">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="flex flex-wrap gap-4 sticky top-20  sm:flex-row sm:gap-9 md:gap-4 mid:justify-center">
            <div className="w-[350px] h-[280px] border-solid border-[1px] border-[#E6E6E6] rounded-lg flex items-center justify-center xsml:w-[280px] hsml:w-[350px] sml:w-[450px] mid:w-[450px] md:w-[335px]  lg:w-[290px] xl:w-[380px] 2xl:w-[315px]">
                <img src={Add} className=""/>
            </div>


            <Address />
            {/* <Address />
            <Address />
            <Address /> */}
            
        </div>
  </div>
    )
}