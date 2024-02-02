import order_confirm from "../Images/confirm_Order.png";
import chat from "../Images/chat.png";
import tick from "../Images/Tick.png";

const Order_Confirm = () => {
  return (
    <section className="container-1">
      <div className="xl:w-[967px] lg:w-[867px] md:w-[637px] xl:h-[726px] md:h-[576px] md:mt-[81px] md:mb-[81px] mt-[51px] mb-[51px] w-[230px] h-[400px] mx-auto flex items-center justify-center">
        <div className="flex ">
          <div className="lg:block hidden">
            <img src={order_confirm} />
          </div>
          <div className="relative lg:w-[412px] lg:h-[463px] md:w-[352px] w-[250px] h-auto">
            <img
              src={chat}
              className="lg:w-[412px] lg:h-[463px] md:w-[352px] md:h-[403px] w-[250px] h-auto"
            />
            <div className="absolute lg:top-[78.94px] md:top-[36px] top-0 lg:left-[125px] md:left-[97px] left-[37.5px] lg:w-[210px] w-[200px] h-full md:pt-0 pt-7">
              <img src={tick} className="w-[120px] md:w-full mx-auto" />
              <div className="lg:w-[195px] mx-auto">
                <p className="md:mt-14 mt-10 md:text-[30px] text-[20px] font-semibold text-center md:leading-[34px] leading-[24px]">
                  Your Order Is Confirmed
                </p>
              </div>
              <div className="w-[190px] md:h-[54px] h-[38px] mx-auto">
                <button className="w-[190px] md:h-[54px] h-[38px] bg-[#E6992A] rounded-lg md:mt-[30px] mt-5 text-white font-medium md:text-[18px] text-sm">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order_Confirm;
