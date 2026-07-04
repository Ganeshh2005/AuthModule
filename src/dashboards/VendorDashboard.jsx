
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'

function VendorDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <section className="auth-card">
      <div className="card-header">
        <p className="card-kicker">Vendor Workspace</p>
        <h2>Hi {user.name}!</h2>
        <p className="card-copy">Track visits, invoices, and service requests assigned to you.</p>
      </div>
      <div className="selection-summary">
        <h3>Quick Actions</h3>
        <ul style={{ paddingLeft: '16px', color: 'var(--text-muted)' }}>
          <li>View Invoices</li>
          <li>Manage Service Requests</li>
          <li>Check Visit History</li>
          <li>Update Service Status</li>
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

export default VendorDashboard
