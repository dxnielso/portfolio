import Navbar from "./Navbar";

const Header = ({estamosTop}) => {

  return (
    <header className={`fixed z-40 w-full h-[80px] bg-white border-t border-gray-100 left-0 bottom-0 flex justify-between items-center px-10 lg:px-20 xl:px-40 2xl:px-60 rounded-tr-lg rounded-tl-lg md:top-0 md:border-t-0 ${!estamosTop && 'md:border-b md:shadow-sm'}`}>
      <h2 className="font-semibold text-2xl">DS</h2>
      <Navbar />
    </header>
  );
};

export default Header;
