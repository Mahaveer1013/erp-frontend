import React from 'react'
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Assignment from './Assignment';
import Academic from './Academic';
import Examination from './Examination';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
                        <Route path='/examination' element={<Examination />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Main
