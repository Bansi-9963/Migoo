import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate()
  useEffect(() => {
    let login = localStorage.getItem('login')
    if (!login) {
      navigate('/sign_in')
    }
  })

  return (
    <div>
      <Component />
    </div>
  )
}
export default PrivateRoute
