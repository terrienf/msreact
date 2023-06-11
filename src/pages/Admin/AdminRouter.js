import React from 'react';
import {ALayout, Dashboard} from "../Admin"
import {Route, Routes} from "react-router-dom";
import {User, UserEdit, UserAdd} from "./User";
import {Client, ClientAdd, ClientEdit} from "./Client";
import Error from "../../utils/error";
import './admin.css';
import {Info, InfoAdd, InfoEdit} from "./Info";

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="user">
                    <Route path="index" element={<User/>}/>
                    <Route path="userEdit/:uid" element={<UserEdit/>}/>
                    <Route path="userAdd" element={<UserAdd/>}/>
                </Route>


                <Route path="client">
                    <Route path="index" element={<Client/>}/>
                    <Route path="clientEdit/:cid" element={<ClientEdit/>}/>
                    <Route path="clientAdd" element={<ClientAdd/>}/>
                </Route>

                <Route path="info">
                    <Route path="index" element={<Info />}/>
                    <Route path="infoEdit/:iid" element={<InfoEdit/>}/>
                    <Route path="infoAdd" element={<InfoAdd/>}/>
                </Route>

                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;