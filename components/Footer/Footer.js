import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary text-center text-white">
      <div className=" p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <FaFacebookF style={{ color: "white" }} />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <FaTwitter style={{ color: "white" }} />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <FaGoogle style={{ color: "white" }} />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <FaInstagram style={{ color: "white" }} />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <FaLinkedin style={{ color: "white" }} />
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {year} Copyright:
        <a className="text-white m-1" style={{ textDecoration: "none" }} href="#!">
          ChedMed
        </a>
      </div>
    </footer>
  );
}
