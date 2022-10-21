import logo from "../../assets/logo-tmdb.png";
import React from "react";
import { HeaderStyle, Logo } from "./styled";



const Header = () => {
    return (
        <HeaderStyle>
         <Logo src={logo} alt="logo"/>   
        </HeaderStyle>
        
    )
}

export default Header