
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'

function SecurityDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <section className="auth-card">
      <div className="card-header">
        <p className="card-kicker">Security Desk</p>
        <h2>Welcome {user.name}!</h2>
        <p className="card-copy">Manage visitor entries/exits, gate passes, and security incidents.</p>
      </div>
      <div className="selection-summary">
        <h3>Quick Actions</h3>
        <ul style={{ paddingLeft: '16px', color: 'var(--text-muted)' }}>
          <li>Register New Visitors</li>
          <li>Manage Gate Passes</li>
          <li>Log Security Incidents</li>
          <li>View Current Visitors</li>
        </ul>
      </div>
      <button
        type="button"
        className="primary-button"
        onClick={() => {
          logout()
          navigate('/login')
        }}
      >
        Logout
      </button>
    </section>
  )
}

export default SecurityDashboard
