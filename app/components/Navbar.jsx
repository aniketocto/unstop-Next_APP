import React from "react";
import "../styles/navbar.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Image
          src="/images/Logo.webp"
          width={150}
          height={100}
          className="logo"
          alt="Unstoppable Solution LLP"
        />
      </div>
      <div className="nav-links-container shape-container">
      <div className="clipped-shape">
        <span>
          <em></em>
        </span>
      </div>
        <Link href="/" className="nav-links">Home</Link>
        <Link href="/about-us" className="nav-links">About Us</Link>
        <p className="nav-links">Portfolio</p>
        <p className="nav-links">Career</p>
        <p className="nav-links">Blog</p>
      </div>
      <div className="cta-container"></div>
    </nav>
  );
};

export default Navbar;
