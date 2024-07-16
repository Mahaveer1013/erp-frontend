import React from 'react'
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Assignment from './Assignment';
import Academic from './Academic';

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/assignment' element={<Assignment />} />
                    <Route path='/academic' element={<Academic />} />
                    <Route path='/examination' element={<Examination />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Main
