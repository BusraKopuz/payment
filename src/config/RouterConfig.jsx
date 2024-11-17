import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import PackageList from '../components/PackageList'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
import PaymentPage from '../components/PaymentPage'

import { useSelector } from 'react-redux'



function RouterConfig() {
    const {user} = useSelector((store) => store.user);
  return (
    <Routes>
    
        <Route path='/LoginForm' element={user.fullName  != "" ? <Navigate to="/package-list" /> : <LoginForm />} />        
       
        <Route path="/package-list" element={
            user.fullName != "" ? (
                <>
                    <Header />
                    <PackageList />
                </>
            ) : (
                <LoginForm/>
            )
        } />
        <Route path="payment" element={
            <>
                <Header />
                <PaymentPage />
            </>
        } />
    </Routes>
  )
}

export default RouterConfig