import { useContext,useEffect } from "react";
import { AuthContext } from "./Auth_Context";
import { useNavigate } from "react-router-dom";
function Logout() {
    const navigate = useNavigate();
    const { setAuthData } = useContext(AuthContext)
    setAuthData({ fnm: null, email: null, role: null });
    useEffect(() => {
        navigate('/');
    }, [navigate]);
}

export default Logout