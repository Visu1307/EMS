import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './pages/Header';
import EmpLogin from './pages/Emp/Login';
import EmpRegister from './pages/Emp/Register';
import EmpDashboard from './pages/Emp/Dashboard';
import HRLogin from './pages/HR/Login';
import HRRegister from './pages/HR/Register'
import AdminLogin from './pages/Admin/Login'
import Role from './pages/Role'
import Logout from './pages/Logout'
import { AuthProvider } from './pages/Auth_Context';

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
          <Route path='/Emp/Dashboard' element={<EmpDashboard/>}/>
          <Route path='/HR/Login' element={<HRLogin/>}/>
          <Route path='/HR/Register' element={<HRRegister/>}/>
          <Route path='/Admin/Login' element={<AdminLogin/>}/>
          <Route path='/Role' element={<Role />} />
          <Route path='/Logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
