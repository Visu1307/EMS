import { useContext } from "react";
import { AuthContext } from "./Auth_Context";
import { useNavigate } from "react-router-dom";


function Logout(){
    const {setAuthData} = useContext(AuthContext)
    const navigate = useNavigate()
    setAuthData({fnm:null,email:null,role:null});
    navigate('/')
}

export default Logout