import React from "react";
import "./style.css";

function Header() {
    return(
        <div className="headerContainer">
            <h1 className="storeName">*STORE NAME*</h1>
            <h2 className="storeSlogan">*GREETING OR SLOGAN ETC.*</h2>
            <img src="https://via.placeholder.com/350x150?text=Placeholder+image" className="storeImage" />
        </div>
    );
}
export default Header;