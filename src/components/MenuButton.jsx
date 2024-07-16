import { motion, MotionConfig } from "framer-motion";

const MenuButton = ({ onClick, showMenu }) => {
  return (
    <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
      <motion.button
        onClick={onClick}
        className="z-50 fixed right-5 top-7 w-8 h-8"
        animate={showMenu ? "open" : "closed"}
        initial={false}
      >
        <motion.span
          className="absolute h-[3px] w-8 bg-white"
          style={{ left: "50%", top: "20%", x: "-50%", y: "-50%" }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["20%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "20%"],
            },
          }}
        />
        <motion.span
          className="absolute h-[3px] w-8 bg-white"
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className="absolute h-[3px] w-8 bg-white"
          style={{ left: "50%", top: "80%", x: "-50%", y: "-50%" }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["80%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "80%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default MenuButton;
