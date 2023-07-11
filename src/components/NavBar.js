import React from "react";

function NavBar() {
    const links = ["home", "about", "projects"];
    const navLinks = links.map((link) => (
        <nav key={link}>
            <a href={`#${link}`}>{link}</a>
        </nav>
    ));

    return <>{navLinks}</>;
}

export default NavBar;
