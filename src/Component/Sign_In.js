import { Link, useNavigate } from 'react-router-dom'
import eye from '../Images/eye-open.png'
import { useState, useEffect } from 'react'
import { login } from '../Component/AuthService'

const Sign_In = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEye = () => {
    const eye_inp = document.getElementById('password-input')
    if (eye_inp.type === 'password') {
      eye_inp.type = 'text'
    } else {
      eye_inp.type = 'password'
    }
  }

  const handlelogin = async e => {
    e.preventDefault() // Prevent the default form submission
    login(email, password)
    localStorage.setItem('login', true) //login true
    navigate('/')
  }

  const navigate = useNavigate()
  useEffect(() => {
    let login = localStorage.getItem('login')
    if (login) {
      navigate('/')
    }
  })

  return (
    <section className='xl:py-[150px] lg:py-[100px] py-[75px] flex justify-center items-center container-1'>
      <div className='flex items-center justify-center md:h-[371px] md:w-[520px] w-full h-full'>
        <div className='sign_in_div  w-full h-full rounded-lg border-[1px] border-[#F2F2F2] md:pt-[24px] pt-5 md:pr-[24px] pr-5 md:pb-[32px] pb-6 md:pl-[24px] pl-5'>
          <center>
            <h1 className='font-semibold md:text-[32px] text-2xl leading-[38.4px]'>
              Sign In
            </h1>
          </center>
          <div className='2xl:h-[147px] 2xl:w-[472px] mt-[20px]'>
            <input
              id='email'
              value={email}
              // onChange={handleChange}
              onChange={event => setEmail(event.target.value)}
              type='email'
              placeholder='Email'
              className='w-full h-[49px] rounded-md border-[1px] border-[#E6E6E6] px-[16px] py-[14px] text-base leading-[20.8px] font-normal focus:outline-none'
            />
            <div className='relative'>
              <input
                onChange={e => setPassword(e.target.value)}
                id='password-input'
                type='password'
                placeholder='Password'
                className='w-full h-[49px] rounded-md border-[1px] border-[#E6E6E6] px-[16px] py-[14px] text-base leading-[20.8px] font-normal mt-[12px] focus:outline-none'
              />
              <img
                src={eye}
                className='absolute top-[25px] right-[16px]'
                onClick={handleEye}
              />
            </div>
            <div className='w-full md:h-[21px] mt-[16px] flex flex-row justify-between'>
              <div className='relative top-[-2px]'>
                <input
                  type='checkbox'
                  className='ssm:w-[20px] ssm:h-[20px] w-[14px] h-[14px]'
                />
                <p className='w-[105px] md:ml-7 ssm:ml-6 ml-5 h-[21px] text-[14px] leading-[21px] text-[#666666] absolute top-[2px]'>
                  Remember Me
                </p>
              </div>
              <div>
                <Link to='/testing'>
                  <p className=' text-[14px] leading-[21px] text-[#666666] font-normal'>
                    Forget Password
                  </p>
                </Link>
              </div>
            </div>
            <div className='md:mt-5 mt-3'>
              <button
                onClick={handlelogin}
                className='  w-full md:h-[45px] h-10 rounded-[43px] bg-[#E6992A] hover:bg-[#af8345ee] transition duration-300 flex justify-center items-center text-white font-semibold text-[14px] leading-[16.8px]'
              >
                Login
              </button>
            </div>
            <div className='ssm:w-full h-[25px] md:mt-5 mt-3' id='register'>
              <div className='flex items-center justify-center'>
                <p className='text-[14px] leading-[21px] text-[#666666] font-normal'>
                  Don’t have account?
                </p>
                <span className='font-medium text-[14px] leading-[21px] text-[#1A1A1A] ml-[4px]'>
                  <Link to='/create_account' className='hover:underline'>
                    Register
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sign_In
