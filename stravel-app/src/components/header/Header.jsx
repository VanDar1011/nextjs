import React from "react";
import "./styleHeader.css";
import Menu from "../menu/Menu";
import ThemeSwitcher from "../themes/ThemeSwitcher";
import Link from "next/link";
export default function Header() {
  return (
    <div className="header position-fixed w-100 p-3">
      <div className="col-10 mx-auto d-flex justify-content-between">
        <div className="logo_name">
          <Link href="/">
            <span className="text-2xl font-bold text-white">
              <span className="text-amber-400">Dat's</span>
              TRAVEL
            </span>
          </Link>
        </div>
        <div className="menu_header text-white">
          <Menu />
        </div>
        <div className="icon_header text-white flex">
          <div className="container_icon d-flex gap-2 align-items-center text-xl">
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
