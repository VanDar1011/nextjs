"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { redirect } from "next/navigation";
export default function Logout() {
  const handeLogout = () => {
    signOut();
    redirect("/login");
  };
  return <button onClick={handeLogout}>Logout</button>;
}
