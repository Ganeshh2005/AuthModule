import { NavLink, Outlet } from 'react-router-dom'

const quickLinks = [
  { to: '/login', label: 'Login' },
  { to: '/signup', label: 'Signup' },
  { to: '/forgot-password', label: 'Forgot Password' },
]

const highlights = [
  'Role-based access for residents, security staff, vendors, and committee members.',
  'Secure onboarding patterns that can connect to JWT, OAuth, or OTP flows later.',
  'Reusable layout and input styles for fast integration with the rest of the society UI.',
]

const activity = [
  { label: 'Auth Requests', value: '1.2K/day' },
  { label: 'Verified Users', value: '96%' },
  { label: 'Support SLA', value: '< 5 mins' },
]

function AuthLayout() {
  return (
    <div className="auth-app-shell">
      <aside className="brand-panel">
        <div className="brand-block">
          <p className="eyebrow">Integrated Society Platform</p>
          <h1>Authentication Module</h1>
          <p className="brand-copy">
            A polished ReactJS starter for login, signup, password recovery, and
            role selection in your society management web app.
          </p>
        </div>

        <div className="overview-card">
          <div className="overview-header">
            <span className="status-dot" />
            Ready For Frontend Integration
          </div>
          <div className="activity-grid">
            {activity.map((item) => (
              <div key={item.label} className="metric-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="highlights-card">
          <h2>What This Covers</h2>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <nav className="quick-links" aria-label="Authentication routes">
          {quickLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `quick-link${isActive ? ' quick-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="auth-content">
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
