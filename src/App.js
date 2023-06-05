import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserRouter from "./pages/User/UserRouter";
import AdminRouter from "./pages/Admin/AdminRouter";
import AuthRouter from "./pages/Auth/AuthRouter";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<UserRouter/>}/>
                    <Route path="/admin/*" element={<AdminRouter/>}/>
                    <Route path="/auth/*" element={<AuthRouter/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
