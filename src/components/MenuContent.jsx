import { motion } from "framer-motion";
const MenuContent = ({ showMenu }) => {
  const variants = {
    open: {
      scaleY: 1,
    },
    closed: {
      scaleY: 0,
    },
  };

  return (
    <motion.section
      key="menu"
      variants={variants}
      initial={false}
      animate={showMenu ? "open" : "closed"}
      transitions={{ duration: 5, ease: "easeIn" }}
      className="fixed z-40 right-0 top-0 bottom-0 left-0 bg-[#1f2531] grid place-content-center origin-top"
    >
      <ul className="flex flex-col justify-center items-center space-y-6 font-azeret text-2xl">
        <li>
          <a href="https://www.linkedin.com/in/dxnielso/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/dxnielso" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://mailto:daniel.solis5200@gmail.com" target="_blank">
            Email
          </a>
        </li>
      </ul>
    </motion.section>
  );
};

export default MenuContent;
