import React from 'react'
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Assignment from './Assignment';
import Academic from './Academic';
import Examination from './Examination';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from './Login';
import '../styles/head-foot.css'
import '../styles/login.css'
import DepartmentDetailPage from './DepartmentDetailPage'

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/assignment' element={<Assignment />} />
                        <Route path='/academic' element={<Academic />} />
                        <Route path="/departments/:departmentName" element={<DepartmentDetailPage />} />
                        <Route path='/examination' element={<Examination />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Main
