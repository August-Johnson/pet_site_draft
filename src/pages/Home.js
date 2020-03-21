import React from "react";
import Header from "../components/Header";
import GoogleMaps from "../components/GoogleMaps";

function HomePage() {
    return (
        <div>
            {/*Hello*/}
            <Header />

            <div className="storeInfo">

                <h2>STORE INFO</h2>

                <div className="infoSection">
                    <h3>ADRESS</h3>
                    <p>1236 East 66th Street</p>
                    <p>Richfield, MN 55423</p>
                    <p>United States</p>
                </div>

                <div className="infoSection">
                    <h3>HOURS</h3>
                    <p>Mon-Sat: *Hours*</p>
                    <p>Sun: *Hours*</p>
                </div>

                <div className="infoSection">
                    <h3>PHONE</h3>
                    <p>(952)-652-5121</p>
                </div>

                <div className="infoSection mapBox">
                    <GoogleMaps />

                    <br />

                    <a href="https://www.google.com/maps/place/Egyptian+Parrot+Petshop/@44.8839625,-93.2632908,17z/data=!4m5!3m4!1s0x87f62996cb551d5d:0xd48cb85ff7c46c5a!8m2!3d44.8839701!4d-93.2569286" rel="noopener noreferrer" target="_blank">
                        <button className="mapButton">
                            Open Google Maps
                        </button>
                    </a>
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