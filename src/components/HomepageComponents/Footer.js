import React from "react";
import classes from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <a
          href="https://facebook.com"
          className={classes.social}
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com"
          className={classes.social}
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://instagram.com"
          className={classes.social}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
