import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../Component/admin/Header";
import SideMenu from "../../Component/admin/SideMenu";
import './admin.css';

const ALayout = () => {
    return (
        <div className="text-left">
            <div>
                <Header/>
            </div>
            <div className="ALayout">
                <div id="admin">
                    <div id="admin"><SideMenu/></div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};


export default ALayout;