import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { GoPackage } from "react-icons/go";
import { HiDocumentSearch } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <Image src="/logo2.png" width={120} height={50} />
        </a>
      </Link>
      <div className="d-flex">

      <Link href="/">
        <a  style={{paddingBottom: "5px"}}>Accueil</a>
      </Link>
      <Link href="/expedier">
        <a className="d-flex align-items-center" style={{paddingBottom: "5px"}}>
          <GoPackage style={{ color: "white" }} className="mx-2" />
          Expédier un colis
        </a>
      </Link>
      <Link href="/annonces">
        <a className="d-flex align-items-center" style={{paddingBottom: "5px"}}>
          <HiDocumentSearch className="mx-1" />
          Voir les annonces
        </a>
      </Link>
      </div>
    </nav>
  );
}
