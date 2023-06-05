import React from 'react';
import {ALayout, Dashboard} from "../Admin"
import {Route, Routes} from "react-router-dom";
import {User, UserEdit, UserAdd} from "./User";
import {Client, ClientAdd, ClientEdit} from "./Client";
import Error from "../../utils/error";
import './admin.css';

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
                    <Route path="clientEdit" element={<ClientEdit/>}/>
                    <Route path="clientAdd" element={<ClientAdd/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;