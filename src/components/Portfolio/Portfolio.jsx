import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Technologies</span>
          </div>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase4.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase5.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase6.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase7.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase8.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase9.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
