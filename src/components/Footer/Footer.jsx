import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import ContactForm from "./Contact";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >   <span className="primaryText">Connect Me</span>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        
        <div className={css.left}>
          <ContactForm />
        </div>

        <div className={css.right}>
          <div className={css.info}>
            {/* <span className="primaryText">Connect Me</span> */}
          </div>
          <ul className={css.menu}>
            <a href="https://www.linkedin.com/in/dktenitinmagdum/">
              <li> LinkedIn</li>
            </a>
            <a href="https://github.com/Nitin-Magdum">
              <li>GitHub</li>
            </a>
            {/* <li>Notes</li>
            <li>Experience</li> */}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
