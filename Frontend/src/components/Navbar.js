import React, { useEffect, useState } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { ConnectWalletButton } from "./ConnectWalletButton";
import { useAuthContext } from "../contexts/Auth";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { userDetails } = useAuthContext();
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "skyblue",
        padding: "10px 20px",
        height: "70px",
      }}
    >
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          listStyleType: "none",
          margin: 0,
        }}
      >
        <li style={{ margin: "0 10px" }}>
          <Link to="/">H-Insure</Link>
        </li>
      </ul>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          listStyleType: "none",
          margin: 0,
          marginLeft: "auto",
        }}
      >
        <li style={{ margin: "0 10px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/About">About</Link>
        </li>
        { <li style={{ margin: "0 10px" }}>
          {userDetails.length !== 0 ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : (
            ""
          )}
        </li> }
      </ul>
      <ConnectWalletButton className="login-btn theme-bg" />
    </nav>
  );
}