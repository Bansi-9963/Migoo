import { Link } from "react-router-dom";
import eye from "../Images/eye-open.png";
import { useState } from "react";

const Sign_In = () => {
  const [initial_EmailId, setInitialEmailId] = useState("");
  const handleKeyUp = (event) => {
    const pswd_text = document.getElementById("password_strength_text");
    const pswd_strnth = document.getElementById("password-strength");
    const inr_pswd_strnth = document.getElementById("inner-password-strength");
    const password_current_value = event.target.value;
    localStorage.setItem("password", password_current_value);

    if (password_current_value.length > 0) {
      pswd_strnth.classList.remove("hidden");
    } else {
      pswd_strnth.classList.add("hidden");
    }
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    const conditions = [
      /[A-Z]/,
      /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
      /\d/,
      (value) => value.length > 10,
    ];

    shuffleArray(conditions);

    let strength = 0;

    for (const condition of conditions) {
      if (condition instanceof RegExp) {
        if (condition.test(password_current_value)) {
          strength += 25;
        }
      } else if (typeof condition === "function") {
        if (condition(password_current_value)) {
          strength = 100;
          break;
        }
      }

      inr_pswd_strnth.style.transitionDuration = "1s";
      inr_pswd_strnth.style.width = strength + "%";

      if (strength === 25) {
        pswd_text.innerText = "Average";
      } else if (strength === 50) {
        pswd_text.innerText = "Good";
      } else if (strength === 75) {
        pswd_text.innerText = "Strong";
      } else if (strength === 100) {
        pswd_text.innerText = "Excellent";
      } else {
        pswd_text.innerText = "Weak";
      }
    }
  };

  const handleEye = () => {
    const eye_inp = document.getElementById("password-input");
    if (eye_inp.type === "password") {
      eye_inp.type = "text";
    } else {
      eye_inp.type = "password";
    }
  };

  const handleMouseToggle = (isMouseOver) => {
    const passwordInput = document.getElementById("password-input");
    const testElement = document.getElementById("test");
    testElement.style.display = isMouseOver ? "block" : "none";
  };

  const handleFocus = () => {
    let a = document.getElementById("test");
    a.style.display = "none";
  };

  const handleChange = (e) => {
    const new_email = e.target.value;
    setInitialEmailId(new_email);
    localStorage.setItem("emailId", new_email);
  };

  return (
    <div className="xl:h-[862px] md:h-[662px] h-[562px] flex items-center justify-center">
      <div className="sign_in_div 2xl:h-[371px] 2xl:w-[520px] xl:h-[371px] xl:w-[500px] md:w-[480px] lg:h-[361px] rounded-lg border-[1px] border-[#F2F2F2] pt-[24px] pr-[24px] pb-[32px] pl-[24px]">
        <center>
          <h1 className="font-semibold text-[32px] leading-[38.4px]">
            Sign In
          </h1>
        </center>
        <div className="2xl:h-[147px] 2xl:w-[472px] mt-[20px]">
          <input
            value={initial_EmailId}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full h-[49px] rounded-md border-[1px] border-[#E6E6E6] px-[16px] py-[14px] text-base leading-[20.8px] font-normal focus:outline-none"
          />
          <div className="relative">
            <input
              onMouseEnter={() => handleMouseToggle(true)}
              onMouseOut={() => handleMouseToggle(false)}
              onFocus={handleFocus}
              onKeyUp={handleKeyUp}
              id="password-input"
              type="password"
              placeholder="Password"
              className="w-full h-[49px] rounded-md border-[1px] border-[#E6E6E6] px-[16px] py-[14px] text-base leading-[20.8px] font-normal mt-[12px] focus:outline-none"
            />
            <div
              className="hidden z-[10] absolute top-[60px] left-20 w-80 p-2 bg-[#666666] leading-4 rounded-lg text-white font-semibold"
              id="test"
              role="tooltip"
            >
              Pattern : Atleast 1 Special Character, Capital Letter and a
              Number.
              <div className="triangle-down"></div>
            </div>
            <img
              src={eye}
              className="absolute top-[25px] right-[16px]"
              onClick={handleEye}
            />
          </div>
          <div className="hidden h-[18px] py-[10px]" id="password-strength">
            <div className="flex items-center justify-end ">
              <p id="password_strength_text"></p>
              <div className="w-[25%] bg-[#ebd8d8b6] h-2 rounded-xl ml-1">
                <div
                  className="w-[0%] bg-[#FF8A00] h-2 rounded-xl"
                  id="inner-password-strength"
                ></div>
              </div>
            </div>
          </div>
          <div className="w-full h-[21px] mt-[16px] flex justify-between">
            <div className="relative">
              <input
                type="checkbox"
                className="ssm:w-[20px] ssm:h-[20px] w-[14px] h-[14px]"
              />
              <span className="ssm:w-[105px] w-auto ml-[6px] h-[21px] ssm:text-[14px] text-[12px] ssm:leading-[21px] leading-[12px] text-[#666666] absolute ssm:top-[2px] top-0">
                Remember Me
              </span>
            </div>
            <div>
              <Link to="/testing">
                <p className="ssm:text-[14px] text-[10px] ssm:leading-[21px] leading-[16px] text-[#666666] font-normal">
                  Forget Password
                </p>
              </Link>
            </div>
          </div>
          <button className="w-full h-[45px] rounded-[43px] bg-[#E6992A] hover:bg-[#af8345ee] transition duration-300 mt-5 flex justify-center items-center text-white font-semibold text-[14px] leading-[16.8px]">
            Login
          </button>
          <div className="ssm:w-full h-[25px] mt-5" id="register">
            <div className="flex items-center justify-center">
              <p className="text-[14px] leading-[21px] text-[#666666] font-normal">
                Don’t have account?
              </p>
              <span className="font-medium text-[14px] leading-[21px] text-[#1A1A1A] ml-[4px]">
                <Link to="create_account" className="hover:underline">
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_In;
