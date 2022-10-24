import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const DashboardHome = () => {
    return (
        <div>
            <Sidebar />
            <Outlet/>
        </div>
    );
};

export default DashboardHome;