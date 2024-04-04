import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer/Footer';

const DashboardLayout = () => {
    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default DashboardLayout;