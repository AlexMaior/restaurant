import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.dataContainer5}>
      <div className={classes.dataContainer5TitleCont}>
        <h2 className={classes.dataContainer5Title}>Contact Us</h2>
      </div>
      <div className={classes.blackboardCont}>
        <div className={classes.blackboardContData}>
          <p className={classes.blackboardContP}>Open Hours</p>
          <p>M-F: 9am-11pm</p>
          <p>S-S: 12am-2am</p>
          <p className={classes.blackboardContP2}>Call</p>
          <p>+032622342</p>
          <p className={classes.blackboardContP2}>Our Address</p>
          <p>830 NW. Elm Road</p>
          <p> Brooklyn, NY 11214</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
