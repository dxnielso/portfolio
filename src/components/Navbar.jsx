import { useState } from "react";
import MenuButton from "./MenuButton";
import MenuContent from "./MenuContent";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <navbar className="2xl:hidden">
      <MenuButton onClick={() => setShowMenu(!showMenu)} showMenu={showMenu} />
      <MenuContent showMenu={showMenu} />
    </navbar>
  );
};

export default Navbar;
