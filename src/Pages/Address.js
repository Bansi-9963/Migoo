

import Sidebar from "../Component/Navigation_Bar"
import Address from "../Component/Address_Card"
import Add from "../Images/add.png"

export default function Addresses(){
    return (

        <div className="flex ssm:flex-row flex-col gap-6 ssm:my-20 my-10  mid:justify-center container-1">
      
          <Sidebar />
        
        <div className="flex flex-wrap gap-4 sticky top-20  sm:flex-row sm:gap-9 md:gap-4 mid:justify-center">
            <div className="md:h-auto h-[250px] border-solid border-[1px] border-[#E6E6E6] rounded-lg flex items-center justify-center w-full md:w-[280px]  lg:w-[290px] xl:w-[380px] 2xl:w-[315px]">
                <img src={Add} className=""/>
            </div>


            <Address />
          
            <Address />
        
            
        </div>
  </div>
    )
}