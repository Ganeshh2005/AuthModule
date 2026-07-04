import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthLayout from './components/AuthLayout.jsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import AdminDashboard from './dashboards/AdminDashboard.jsx'
import ResidentDashboard from './dashboards/ResidentDashboard.jsx'
import SecurityDashboard from './dashboards/SecurityDashboard.jsx'
import VendorDashboard from './dashboards/VendorDashboard.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/resident" element={<ResidentDashboard />} />
          <Route path="/dashboard/security" element={<SecurityDashboard />} />
          <Route path="/dashboard/vendor" element={<VendorDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
