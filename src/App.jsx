import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './page/Home.jsx'
import Sider from './page/Sider.jsx'

import Mahasiswa from './Components/Mahasiswa.jsx'
import Register from './Auth/Register.jsx'
import Login from './Auth/Login.jsx'
import AdminDashboard from './admin/AdminDashboard.jsx'
import AdminMahasiswa from './admin/AdminMahasiswa.jsx'
import ShowMhs from './admin/Mahasiswa/ShowMhs.jsx'
import { AuthProvider } from './Auth/AuthContext.jsx'
import AddMhs from './admin/Mahasiswa/AddMhs.jsx'
import UpdateMhs from './admin/Mahasiswa/UpdateMhs.jsx'
import ProtectedRoute from './Auth/ProtectedRoute.jsx'
function App (){

  
  return (
    <>
    <Router>
      <div className="bg-gray-200">
        <div className="flex min-h-screen min-w-screen">
          <Sider/>
          <Routes>            
            <Route path='/admindashboard' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}></Route>
            <Route path='/showmhs' element={<ProtectedRoute><ShowMhs/></ProtectedRoute>}></Route>
            <Route path='/addmhs' element={<ProtectedRoute><AddMhs/></ProtectedRoute>}></Route>
            <Route path='/updatemhs' element={<ProtectedRoute><UpdateMhs/></ProtectedRoute>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/adminmmhs' element={<AdminMahasiswa/>}></Route>
            <Route path='/addmahasiswa' element={<Mahasiswa/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}
export default App;

