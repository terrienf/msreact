import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../Auth/Login";
import Error from "../../utils/error";

import {Layout, Home, Infos} from "../User"

const UserRouter = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layout/>}>
                    {/*Page d'accueil du site sans aucun caractère*/}
                    <Route index element={<Home/>}/>

                    <Route path="/home" element={<Home/>}/>
                    <Route path="/infos/:cid" element={<Infos/>}/>
                    <Route path="/login" element={<Login/>}/>

                    <Route path="*" element={<Error/>}/>
                </Route>

            </Routes>
        </div>
    );
};

export default UserRouter;