import React from "react";
import "./style.css";

function Header() {
    return(
        <div className="headerContainer">
            <h1 className="storeName">Eqyptian Parrot Petshop</h1>
            <h2 className="storeSlogan">Pet Store in Richfield</h2>
            <h3 className="storeAddress">1236 East 66th Street, Richfield, MN</h3>
            <img src="https://via.placeholder.com/350x150?text=Placeholder+image" className="storeImage" alt="store front" />
        </div>
    );
}
export default Header;