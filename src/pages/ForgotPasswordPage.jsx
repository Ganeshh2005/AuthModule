import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthInput from '../components/AuthInput.jsx'

function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Reset link prepared. Wire this action to your email or OTP recovery service.')
  }

  return (
    <section className="auth-card">
      <div className="card-header">
        <p className="card-kicker">Recovery Flow</p>
        <h2>Forgot your password?</h2>
        <p className="card-copy">
          Enter your registered email to start a secure reset flow for your society account.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <AuthInput
          id="forgot-email"
          label="Registered Email"
          type="email"
          placeholder="security@societyhub.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          hint="You can later swap this for mobile OTP recovery if needed."
        />

        <button type="submit" className="primary-button">
          Send Reset Link
        </button>
      </form>

      {message ? <p className="warning-banner">{message}</p> : null}

      <div className="support-card">
        <h3>Need manual help?</h3>
        <p>
          Ask the committee admin to verify your identity and reissue account access from the
          admin dashboard.
        </p>
      </div>

      <div className="card-footer">
        <span>Remembered your password?</span>
        <Link className="text-link" to="/login">
          Return to login
        </Link>
      </div>
    </section>
  )
}

export default ForgotPasswordPage
