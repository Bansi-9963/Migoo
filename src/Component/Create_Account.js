import React from 'react'
import eye from '../Images/eye-open.png'
import eye_closed from '../Images/closed-eye.png'

import { Link } from 'react-router-dom'

const Create_Acct = () => {
  const handleKeyUp = event => {
    const pswd_text = document.getElementById('password_strength_text')
    const pswd_strnth = document.getElementById('password-strength')
    const inr_pswd_strnth = document.getElementById('inner-password-strength')
    const password_current_value = event.target.value
    localStorage.setItem('password', password_current_value)

    if (password_current_value.length > 0) {
      pswd_strnth.classList.remove('hidden')
    } else {
      pswd_strnth.classList.add('hidden')
    }
    function shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
    }

    const conditions = [
      /[A-Z]/,
      /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
      /\d/,
      value => value.length > 10
    ]

    shuffleArray(conditions)

    let strength = 0

    for (const condition of conditions) {
      if (condition instanceof RegExp) {
        if (condition.test(password_current_value)) {
          strength += 25
        }
      } else if (typeof condition === 'function') {
        if (condition(password_current_value)) {
          strength += 25
        }
      }

      inr_pswd_strnth.style.transitionDuration = '1s'
      inr_pswd_strnth.style.width = strength + '%'

      if (strength === 25) {
        pswd_text.innerText = 'Average'
      } else if (strength === 50) {
        pswd_text.innerText = 'Good'
      } else if (strength === 75) {
        pswd_text.innerText = 'Strong'
      } else if (strength === 100) {
        pswd_text.innerText = 'Excellent'
      } else {
        pswd_text.innerText = 'Weak'
      }
    }
  }

  const handleEye = (input_id, img_src) => {
    const eye_inp1 = document.getElementById(`${input_id}`)
    const eye_img = document.getElementById(`${img_src}`)
    if (eye_inp1.type === 'password' && eye_img.src === eye) {
      eye_img.src = eye_closed
      eye_inp1.type = 'text'
    } else {
      eye_inp1.type = 'password'
      eye_img.src = eye
    }
  }

  const handleMouseToggle = isMouseOver => {
    const testElement = document.getElementById('tooltip')
    testElement.style.display = isMouseOver ? 'block' : 'none'
  }

  const handleFocus = () => {
    let tooltip_div = document.getElementById('tooltip')
    tooltip_div.style.display = 'none'
  }

  const handleregister = async e => {
    e.preventDefault() // Prevent the default form submission

    const email = document.getElementById('email').value
    const password = document.getElementById('password-input').value
    // const confirm_password = document.getElementById(
    //   'confirm_password-input'
    // ).value
    console.log(email + ' ' + password)

    try {
      const response = await fetch(
        'http://192.168.2.134:8000/api/user-register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password,
            // confirm_password: confirm_password
          })
        }
      )

      const data = await response.json()
      console.log('data--------------', data)
      console.log('data--------------', typeof data)

      // Check if login was successful
      if (data && data.id) {
        console.log('Register successful!')
        // Store email and password in local storage
        // localStorage.setItem('email', email)
        // localStorage.setItem('password', password)
        // Redirect or perform any other action after successful login

        window.location.href = '/' // Change '/home' to the actual URL of your home page
      } else {
        console.log('Register failed!')
        // Here you can handle failed login attempts, show an error message, etc.
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      // Handle any errors that occur during the fetch
    }
  }

  return (
    <div className='xl:py-[140px] lg:py-[100px] md:py-[80px] py-16 flex items-center justify-center container-1'>
      <div className='create_acct_div md:h-[432px] md:w-[520px] w-full rounded-lg border-[1px] border-[#F2F2F2] md:pt-[24px] pt-5 md:pr-[24px] pr-5 md:pb-[32px] pb-[26px] md:pl-[24px] pl-5'>
        <center>
          <h1 className='font-semibold md:text-[32px] text-[24px] leading-[38.4px]'>
            Create Account
          </h1>
        </center>
        <div className='2xl:h-[208px] 2xl:w-[472px] mt-[20px]'>
          <input
            id='email'
            type='email'
            placeholder='Email'
            className='w-full h-[49px] rounded-md border-[1px] border-[#E6E6E6] md:px-[16px] px-[14px] md:py-[14px] py-3 text-base leading-[20.8px] font-normal focus:outline-[#E6992A]'
          />
          <div className='relative'>
            <input
              onMouseEnter={() => handleMouseToggle(true)}
              onMouseOut={() => handleMouseToggle(false)}
              onFocus={handleFocus}
              onKeyUp={handleKeyUp}
              id='password-input'
              type='password'
              placeholder='Password'
              className='w-full h-[49px] rounded-md border-[1px] border-[#E6E6E6] md:px-[16px] px-[14px] md:py-[14px] py-3 text-base leading-[20.8px] font-normal mt-[12px] focus:outline-[#E6992A]'
            />
            <div
              className='hidden z-[10] absolute top-[60px] left-20 w-80 p-2 bg-[#666666] leading-4 rounded-lg text-white font-semibold'
              id='tooltip'
              role='tooltip'
            >
              Pattern : Atleast 1 Special Character, Capital Letter and a
              Number.
              <div className='triangle-down'></div>
            </div>
            <img
              src={eye}
              className='absolute top-[25px] right-[16px]'
              id='eye_1'
              onClick={() => handleEye('password-input', 'eye_1')}
            />
          </div>
          <div className='hidden h-[18px]' id='password-strength'>
            <div className='flex items-center justify-end '>
              <p id='password_strength_text'></p>
              <div className='w-[25%] bg-[#ebd8d8b6] h-2 rounded-xl ml-1'>
                <div
                  className='w-[0%] bg-[#FF8A00] h-2 rounded-xl'
                  id='inner-password-strength'
                ></div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <input
              id='confirm_password-input'
              type='password'
              placeholder='Confirm Password'
              className='w-full h-[49px] rounded-md border-[1px] border-[#E6E6E6] md:px-[16px] px-[14px] md:py-[14px] py-3 text-base leading-[20.8px] font-normal mt-[12px] focus:outline-[#E6992A]'
            />
            <img
              src={eye}
              className='absolute top-[25px] right-[16px]'
              id='eye_2'
              onClick={() => handleEye('confirm_password-input', 'eye_2')}
            />
          </div>
          <div className='w-full h-[21px] mt-[16px] '>
            <div className='relative'>
              <input
                type='checkbox'
                className='ssm:w-[20px] ssm:h-[20px] w-[14px] h-[14px]'
              />
              <span className='ssm:w-[208px] w-auto ml-[6px] h-[21px] ssm:text-[14px] text-[12px] ssm:leading-[21px] leading-[12px] text-[#666666] absolute ssm:top-[3px] top-2'>
                Accept all terms & Conditions
              </span>
            </div>
          </div>
          <button
            onClick={handleregister}
            className='w-full h-[45px] rounded-[43px] bg-[#E6992A] hover:bg-[#af8345ee] transition duration-300 md:mt-5 ssm:mt-4 mt-3 flex justify-center items-center text-white font-semibold text-[14px] leading-[16.8px]'
          >
            Create Account
          </button>
          <div className='ssm:w-full h-[25px] mt-5'>
            <div className='flex ssm:flex-row flex-col items-center ssm:justify-center justify-between'>
              <p className='text-[14px] leading-[21px] text-[#666666] font-normal'>
                Already have an account?
              </p>
              <span className='font-medium text-[14px] leading-[21px] text-[#1A1A1A] ml-[4px]'>
                <Link to='/' className='hover:underline'>
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create_Acct
