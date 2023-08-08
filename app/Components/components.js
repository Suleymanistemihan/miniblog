import Link from "next/link";
import React from "react";
import "../globals.css";
export default function NavBar() {
  return (
    <main className="NavCont">
      <div>
        <Link className="fa-solid fa-house" href="./">
          <br></br>
          <p className="fa-solid">HOME</p>
        </Link>
      </div>
      <div>
        <Link className="fa-solid fa-camera" href="./About">
          <br></br>
          <p className="fa-solid">PHOTOS</p>
        </Link>
      </div>
    </main>
  );
}

export function Footer() {
  return (
    <main className="FooterCont">
      <ul>
        <li>
          <a
            className="GitHub"
            href="https://github.com/Suleymanistemihan"
            target="_blank"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            className="Linkedin"
            href="https://www.linkedin.com/in/suleyman-istemihan-4474891b4/"
            target="_blank"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            className="instagram"
            href="https://www.instagram.com/suleymanistemihan/"
            target="_blank"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </main>
  );
}
