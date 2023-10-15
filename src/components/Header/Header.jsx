import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  // To handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper} flexCenter`} // Center horizontally and vertically
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow, borderRadius: "10px" }} // Add curved edges
    >
      <div className={`innerWidth ${css.container}`}>
        <div className={css.name}></div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#experties">Skills</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Technologies</a></li>
          <li><a href="#people">Contact me</a></li>
          <li className={`flexCenter ${css.phone}`}>
          </li>
        </ul>
       
        
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
