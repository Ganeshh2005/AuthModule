
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthInput from '../components/AuthInput.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const roles = [
  {
    id: 'admin',
    title: 'Admin Dashboard',
    description: 'For committee members to supervise reports, residents, and operations.',
  },
  {
    id: 'security',
    title: 'Security Dashboard',
    description: 'For gate staff to manage visitor approvals, entries, and exits.',
  },
  {
    id: 'resident',
    title: 'Resident Dashboard',
    description: 'For flat owners and family members to view dues, notices, and visitors.',
  },
  {
    id: 'vendor',
    title: 'Vendor Dashboard',
    description: 'For service providers to track visits, invoices, and support requests.',
  },
]

function LoginPage() {
  const [step, setStep] = useState('role-select') // 'role-select' or 'credentials'
  const [selectedRole, setSelectedRole] = useState(null)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [message, setMessage] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
    setStep('credentials')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Mock login
    const mockUser = {
      name: selectedRole.id.charAt(0).toUpperCase() + selectedRole.id.slice(1) + ' User',
      email: formData.email,
      role: selectedRole.id,
    }
    login(mockUser)
    setMessage('Login successful! Redirecting...')
    // Redirect based on role
    setTimeout(() => {
      switch (selectedRole.id) {
        case 'admin':
          navigate('/dashboard/admin')
          break
        case 'security':
          navigate('/dashboard/security')
          break
        case 'resident':
          navigate('/dashboard/resident')
          break
        case 'vendor':
          navigate('/dashboard/vendor')
          break
        default:
          navigate('/login')
      }
    }, 1000)
  }

  if (step === 'role-select') {
    return (
      <section className="auth-card">
        <div className="card-header">
          <p className="card-kicker">Choose Your Role</p>
          <h2>Select login type</h2>
          <p className="card-copy">
            Pick your role to access the correct dashboard for the society management platform.
          </p>
        </div>

        <div className="role-grid">
          {roles.map((role) => {
            return (
              <button
                key={role.id}
                type="button"
                className="role-card"
                onClick={() => handleRoleSelect(role)}
              >
                <span className="role-pill">{role.id}</span>
                <strong>{role.title}</strong>
                <p>{role.description}</p>
              </button>
            )
          })}
        </div>

        <div className="card-footer">
          <span>New to the platform?</span>
          <Link className="text-link" to="/signup">
            Create account
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="auth-card">
      <div className="card-header">
        <button
          type="button"
          className="text-link"
          style={{ marginBottom: '8px', width: 'fit-content', padding: '0', border: 'none', background: 'transparent', cursor: 'pointer' }}
          onClick={() => setStep('role-select')}
        >
          ← Back to role selection
        </button>
        <p className="card-kicker">Login to {selectedRole.title}</p>
        <h2>Enter your credentials</h2>
        <p className="card-copy">
          Sign in to access your {selectedRole.title} workspace.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <AuthInput
          id="login-email"
          label="Email Address"
          type="email"
          placeholder={`${selectedRole.id}@societyhub.com`}
          value={formData.email}
          onChange={handleChange}
          required
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
    </section>
  )
}

export default LoginPage
