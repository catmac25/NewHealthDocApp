import React from "react";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routes';
const Layout = ()=>{
    return (
    <>
        <Header/>
        <main className="bg-gradient-to-r from-cyan-50 to-white">
            <Routers/>
        </main>
        <Footer/>
    </>
    )
};

export default Layout;