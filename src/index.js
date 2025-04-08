import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import EmpLogin from './pages/Emp/Login';
import EmpRegister from './pages/Emp/Register';
import Role from './pages/Role'
import Logout from './pages/Logout'
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
          <Route path='/' element={<App />} />
          <Route path='/Emp/Login' element={<EmpLogin />} />
          <Route path='/Emp/Register' element={<EmpRegister />} />
          <Route path='/Role' element={<Role />} />
          <Route path='/Logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance, log results (e.g., reportWebVitals(console.log))
reportWebVitals();
