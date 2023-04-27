import Header from "./components/Header";
import ButtonTop from "./components/ButtonTop";
import BarraLateral from "./components/BarraLateral";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import spinner from "./assets/spinner.gif";

function App() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [estamosTop, setEstamosTop] = useState(true);
  const [cargando, setCargando] = useState(true);

  // Activar evento de scroll
  useEffect(() => {

    window.addEventListener("load", () => {
      setCargando(false);
    });

    const handleScrollY = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  // Detectar cuando estamos en la parte superior
  useEffect(() => {
    if (scrollY != 0) setEstamosTop(false);
    else setEstamosTop(true);
  }, [scrollY]);

  return (
    <>
      {cargando ? (
        <div className="flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-white">
          <div className="w-[120px] h-[120px]">
            <img src={spinner} alt="Spinner" />
          </div>
        </div>
      ) : (
        <>
          <div className="px-20 py-5 lg:px-20 xl:px-40 2xl:px-60 pb-20 md:pt-20 min-h-screen bg-slate-50 select-none">
            <ButtonTop estamosTop={estamosTop} />
            <BarraLateral />
            <Header estamosTop={estamosTop} />
            <div className="flex flex-col gap-y-36 lg:gap-y-0">
              <Hero />
              <AboutMe />
              <Skills />
              <Services />
              <Portfolio />
              <Contact />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
