"use client"
import "../styles/navbar.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Image
          src="/images/LOGO.SVG"
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
        <Link href="/" className="nav-links" data-text="Home">
          <span className="text">Home</span>
        </Link>
        <Link href="/about-us" className="nav-links" data-text="About Us">
          <span className="text">About Us</span>
        </Link>
        <p className="nav-links" data-text="Portfolio">
          <span className="text">Portfolio</span>
        </p>
        <p className="nav-links" data-text="Career">
          <span className="text">Career</span>
        </p>
        <p className="nav-links" data-text="Blog">
          <span className="text">Blog</span>
        </p>
      </div>
      <div className="cta-container">
        <button className="pushable" onClick={() => console.log("press")}>
          <span className="front">Push me</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
