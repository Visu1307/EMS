import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import AdminLogin from './pages/AdminLogin';
import EmpLogin from './pages/Emp_Login'; 
import EmpRegister from './pages/Emp_Register';
import HRRegister from './pages/HRRegister';
import HRLogin from './pages/HRLogin';
import Role from './pages/Role';
import { AuthProvider } from './pages/Auth_Context';
import HRDashboard from './pages/HRDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/emp-login" element={<EmpLogin />} />
          <Route path="/emp-register" element={<EmpRegister />} />
          <Route path="/role" element={<Role />} />
          <Route path="/hr-register" element={<HRRegister />} />
          <Route path="/hr-login" element={<HRLogin />} />
          <Route path="/hr-dashboard" element={<HRDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance, log results (e.g., reportWebVitals(console.log))
reportWebVitals();
