import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const LeaveRating = () => {
  const [rating, setRating] = useState('') // State for rating
  const [feedback, setFeedback] = useState('') // State for feedback
  const [value, setValue] = useState(0)
  const [isFormVisible, setIsFormVisible] = useState(true)

  const handleFeedbackChange = event => {
    setFeedback(event.target.value)
  }
  const handleCancel = () => {
    // Toggle the visibility of the form
    setIsFormVisible(prevState => !prevState)
  }

  const handlePublish = () => {
    // Implement the logic to publish the feedback
    console.log('Rating:', rating)
    console.log('Feedback:', feedback)
    // Add your logic to publish the feedback to the backend or perform other actions
  }
  return (
    <>
      {isFormVisible && (
        <div className='relative w-full sm:w-[472px] rounded-lg shadow-lg bg-white'>
          <button
            className='absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700'
            onClick={handleCancel}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <form>
            <div className='border-b-[1px] pl-6 py-4'>RATING</div>
            <div className='p-6'>
              <Box
                sx={{
                  '& > legend': {}
                }}
              >
                <Typography component='legend'>Rating</Typography>
                <Rating
                  name='simple-controlled'
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue)
                  }}
                />
              </Box>

              <div className='flex flex-col pt-4'>
                <label>Feedback</label>
                <textarea
                  className='mt-2'
                  value={feedback}
                  onChange={handleFeedbackChange}
                  placeholder='Write down your feedback about our product & services'
                  rows='4'
                />
              </div>
              <div className='mt-6'>
                <button
                  type='button'
                  className='w-full sm:w-auto border p-4 bg-[#E6992A] text-white font-bold'
                  onClick={handlePublish}
                >
                  PUBLISH REVIEW
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default LeaveRating
