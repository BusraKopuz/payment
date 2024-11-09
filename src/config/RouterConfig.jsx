import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import PackageList from '../components/PackageList'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
import { useSelector } from 'react-redux'


function RouterConfig() {
    const {user} = useSelector((store) => store.user);
  return (
    <Routes>
    
        <Route path='/' element={user ? <Navigate to="/package-list" /> : <LoginForm />} />        
       
        <Route path="/package-list" element={
            user ? (
                <>
                    <Header />
                    <PackageList />
                </>
            ) : (
                <Navigate to="/" /> 
            )
        } />
    </Routes>
  )
}

export default RouterConfig