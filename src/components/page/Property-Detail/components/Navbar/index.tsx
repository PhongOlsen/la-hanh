import React from "react";

const Navbar = () => {
    return (
        <div className="d-flex">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="pills-description-tab" data-toggle="pill"
                       href="#pills-description" role="tab" aria-controls="pills-description"
                       aria-expanded="true">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-manufacturer-tab" data-toggle="pill"
                       href="#pills-manufacturer" role="tab" aria-controls="pills-manufacturer"
                       aria-expanded="true">Description</a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;
