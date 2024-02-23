// AuthService.js - Service to handle authentication logic

export const login = async (email, password) => {
  try {
    const response = await fetch('http://192.168.2.134:8000/api/user-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    if (response.ok) {
      console.log('Login successful!')
      const credentials = await response.json()
      console.log('credentials')
      localStorage.setItem('login', true) //login true
      // navigate('/')
      localStorage.setItem('credentials', JSON.stringify(credentials))
      window.location.href = '/' // Redirect to home page or any other desired page
    } else {
      console.log('Login failed!')
      window.location.href = '/sign_in'

      // Handle failed login attempts, show error message, etc.
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    // Handle any errors that occur during the fetch
  }
}

export const logout = async () => {
  try {
    // Send a request to your server to invalidate the user's session
    const response = await fetch('http://192.168.2.134:8000/api/user-logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // Remove stored credentials from local storage
    localStorage.removeItem('credentials')
    localStorage.removeItem('login')
    console.log('Logout successful!')
    window.location.href = '/sign_in' // Redirect to login page after logout
  } catch (error) {
    console.error('Error fetching data:', error)
    // Handle any errors that occur during the fetch
  }
}
