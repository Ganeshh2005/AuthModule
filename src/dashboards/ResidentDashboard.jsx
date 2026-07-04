
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'

function ResidentDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <section className="auth-card">
      <div className="card-header">
        <p className="card-kicker">Resident Portal</p>
        <h2>Hi {user.name}!</h2>
        <p className="card-copy">View your dues, notices, visitor logs, and other updates here.</p>
      </div>
      <div className="selection-summary">
        <h3>Quick Actions</h3>
        <ul style={{ paddingLeft: '16px', color: 'var(--text-muted)' }}>
          <li>Check Maintenance Dues</li>
          <li>View Society Notices</li>
          <li>Raise Support Requests</li>
          <li>Track Visitors</li>
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

export default ResidentDashboard
