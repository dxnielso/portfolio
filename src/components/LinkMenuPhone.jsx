import { Link, animateScroll as scroll } from "react-scroll";

const LinkMenuPhone = ({icono, texto, to}) => {
  return (
    <li className="flex justify-center items-center">
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="cursor-pointer"
      >
        <div className="flex flex-col justify-center items-center gap-y-2">
          {icono}
          <p className="font-medium text-sm">{texto}</p>
        </div>
      </Link>
    </li>
  );
};

export default LinkMenuPhone;
