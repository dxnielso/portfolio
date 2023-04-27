import { Link } from "react-scroll";

const LinkMenu = ({texto, to}) => {
  return (
    <li className="flex justify-center items-center">
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="cursor-pointer"
      >
        <p className="font-normal text-sm">{texto}</p>
      </Link>
    </li>
  );
};

export default LinkMenu;
