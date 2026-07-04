
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <section className="auth-card">
      <div className="card-header">
        <p className="card-kicker">Admin Workspace</p>
        <h2>Welcome {user.name}!</h2>
        <p className="card-copy">Here you can manage residents, finances, reports, and more.</p>
      </div>
      <div className="selection-summary">
        <h3>Quick Actions</h3>
        <ul style={{ paddingLeft: '16px', color: 'var(--text-muted)' }}>
          <li>View Resident Profiles</li>
          <li>Generate Monthly Reports</li>
          <li>Manage Staff Assignments</li>
          <li>Review Support Tickets</li>
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

export default AdminDashboard
