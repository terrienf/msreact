import {accountService} from "../services/account.service";
import {Navigate} from "react-router-dom";

const AuthGuard = ({children}) => {

    if (!accountService.isLogged()){            /*isLogged renvoi un boolén*/
        return <Navigate to="/auth/login"/>
    }
    return children
};

export default AuthGuard;