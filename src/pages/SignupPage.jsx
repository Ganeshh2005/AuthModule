import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthInput from '../components/AuthInput.jsx'

function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match. Please review and try again.')
      return
    }

    setMessage('Signup request captured. Next step: connect this to your registration API.')
  }

  return (
    <section className="auth-card">
      <div className="card-header">
        <p className="card-kicker">Create Access</p>
        <h2>Register a new society account</h2>
        <p className="card-copy">
          Capture user details here before assigning the correct role and access permissions.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="grid-two">
          <AuthInput
            id="signup-name"
            label="Full Name"
            placeholder="Aarav Patel"
            value={formData.fullName}
            onChange={handleChange}
            required
            name="fullName"
          />
          <AuthInput
            id="signup-phone"
            label="Phone Number"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            required
            name="phone"
          />
        </div>

        <AuthInput
          id="signup-email"
          label="Email Address"
          type="email"
          placeholder="resident@societyhub.com"
          value={formData.email}
          onChange={handleChange}
          required
          name="email"
        />

        <div className="grid-two">
          <AuthInput
            id="signup-password"
            label="Password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
            name="password"
            hint="Minimum 8 characters recommended."
          />
          <AuthInput
            id="signup-confirm-password"
            label="Confirm Password"
            type="password"
            placeholder="Repeat your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            name="confirmPassword"
          />
        </div>

        <label className="checkbox-row">
          <input type="checkbox" required />
          <span>I agree to the society platform terms and privacy policy.</span>
        </label>

        <button type="submit" className="primary-button">
          Create Account
        </button>
      </form>

      {message ? (
        <p className={message.includes('do not match') ? 'error-banner' : 'success-banner'}>
          {message}
        </p>
      ) : null}

      <div className="card-footer">
        <span>Already registered?</span>
        <Link className="text-link" to="/login">
          Back to login
        </Link>
      </div>
    </section>
  )
}

export default SignupPage
