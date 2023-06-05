import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../Component/user/Header";

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Outlet />
        </div>
    );
};

export default Layout;