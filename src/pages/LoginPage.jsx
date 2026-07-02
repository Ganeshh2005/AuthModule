import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthInput from '../components/AuthInput.jsx'

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Login request submitted. Connect this form to your API or auth provider.')
  }

  return (
    <section className="auth-card">
      <div className="card-header">
        <p className="card-kicker">Welcome Back</p>
        <h2>Login to your society workspace</h2>
        <p className="card-copy">
          Sign in with your registered email and password to access your assigned dashboard.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <AuthInput
          id="login-email"
          label="Email Address"
          type="email"
          placeholder="admin@societyhub.com"
          value={formData.email}
          onChange={handleChange}
          required
          hint="Use the same email mapped to your resident, vendor, or staff profile."
          name="email"
        />
        <AuthInput
          id="login-password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          hint="Use 8+ characters with a mix of letters, numbers, and symbols."
          name="password"
        />

        <div className="form-row">
          <label className="checkbox-row">
            <input type="checkbox" />
            <span>Keep me signed in on this device</span>
          </label>
          <Link className="text-link" to="/forgot-password">
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="primary-button">
          Sign In
        </button>
      </form>

      {message ? <p className="success-banner">{message}</p> : null}

      <div className="card-footer">
        <span>New to the platform?</span>
        <Link className="text-link" to="/signup">
          Create account
        </Link>
      </div>
    </section>
  )
}

export default LoginPage
