import React from "react";
import "./style.css";

function Header() {
    return(
        <div className="headerContainer">
            <h1 className="storeName">Eqyptian Parrot Petshop</h1>
            <h2 className="storeSlogan">*GREETING OR SLOGAN ETC.*</h2>
            <img src="https://via.placeholder.com/350x150?text=Placeholder+image" className="storeImage" alt="store front" />
        </div>
    );
}
export default Header;