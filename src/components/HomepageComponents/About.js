import React from "react";
import classes from "./About.module.css";
import Chef from "../../images/sushiChef.jpg";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.aboutTitleContainer}>
        <h2 className={classes.aboutTitle}>About</h2>
      </div>
      <div className={classes.aboutDescription}>
        <div className={classes.aboutDescriptionImageContainer}>
          <img
            src={Chef}
            className={classes.aboutDescriptionImage}
            alt="chef"
          />
        </div>
        <div className={classes.aboutDescriptionContainer}>
          <p className={classes.aboutDescriptionContainerText}>
            <b>Jiro Ono</b> is generally regarded by fellow chefs as the
            greatest sushi chef alive. Owner of the Sukiyabashi Jiro, a
            3-Michelin star sushi restaurant in Tokyo, the 90-year-old chef has
            served many world-famous leaders including Prime Minister Shinzo Abe
            and former President Barack Obama in 2014. During his 65 years as a
            qualified sushi chef, Jiro has created new methods used in
            contemporary sushi preparation by being an exceptional perfectionist
            with rigid discipline. Some of these include, massaging octopus for
            much longer than customary, to enhance texture and flavour, boiling
            prawn just before serving it to the customer when it was customary
            to boil prawns in the morning for the days’ service, and, beginning
            an omakase meal with a mild white fish, when it was customary to
            begin with tuna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
