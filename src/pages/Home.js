import React from "react";
import Header from "../components/Header";

function HomePage() {
    return (
        <div>
            {/*Hello*/}
            <Header />

            <div className="storeInfo">

                <h2>STORE INFO</h2>

                <div className="infoSection">
                    <h3>ADRESS</h3>
                    <p>*Store name*</p>
                    <p>*Store address*</p>
                    <p>*City*, *State* *Zipcode*</p>
                </div>

                <div className="infoSection">
                    <h3>HOURS</h3>
                    <p>Mon-Sat: *Hours*</p>
                    <p>Sun: *Hours*</p>
                </div>

                <div className="infoSection">
                    <h3>PHONE</h3>
                    <p>*Phone number*</p>
                </div>

            </div>

            <br />
            <hr />

            <div className="storeAbout">
                <h2>About This Store</h2>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </div>
    );
}

export default HomePage;