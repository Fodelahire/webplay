import React from "react";
import GuestNavbar from "./components/GuestNavbar"; 
// import styles from "@/styles/guest.module.scss"; 
import Footer from "../components/Footer";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      <GuestNavbar /> 
      <main >{children}</main>
      <Footer/>
    </div>
  );
}
