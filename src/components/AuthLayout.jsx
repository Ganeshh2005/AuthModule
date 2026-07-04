import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className="auth-app-shell" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <main className="auth-content" style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
