import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../Component/admin/Header";
import SideMenu from "../../Component/admin/SideMenu";
import './admin.css';

const ALayout = () => {
    return (
        <div className="ALayout">
            <Header/>
            <div id="admin">
                <SideMenu/>
                <div id="admin_body"><Outlet/></div>
            </div>
        </div>
    );
};

export default ALayout;