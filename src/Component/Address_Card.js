

const Address_Card = () => {
    return (
        <div className="w-[350px] h-[280px] border-solid border-[1px] border-[#E6E6E6] rounded-lg pt-8 pl-8 pr-8 leading-9 xsml:w-[280px] xsml:leading-8 hsml:w-[350px] hsml:leading-9 mid:w-[450px] mid:leading-9 mid:w-[305px] mid:leading-8 mid:pt-5 md:w-[335px] md:pt-5 md:leading-8 lg:w-[290px] xl:w-[380px] xl:pt-4 2xl:w-[315px]">
               <p className="uppercase font-semibold text-[#999999] text-[16px]">Billing Address</p>
               <p className="text-[#1a1a1a] text-[20px] font-medium">Dainne Russell</p>
               <p className="text-[#666666] text-[16px] leading-7">B-308 Shilp Corporate park. Rajpath rangoli road, Ahmedabad-31134</p>
               <p className="text-[#1a1a1a] text-[16px] font-normal">Sanskar.technolab@gmail.com</p>
               <p className="text-[#1a1a1a] text-[16px] font-normal">9919032436</p>
               <a href="#" className="text-[#E6992A] font-norma font-poppins">Edit Address</a>
            </div>
    )
}

export default Address_Card;