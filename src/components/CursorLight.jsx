import { useEffect, useState } from "react";

const CursorLight = () => {
  useEffect(() => {
    const cursorLight = document.getElementById("cursorLight");

    const handleMouseMove = (event) => {
      const x = event.clientX - 320
      const y = event.clientY - 320;
      cursorLight.style.transform = `translate(${x}px, ${y}px)`;
    };
    const handleMouseEnter = () => {
      console.log("Entro");
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursorLight"
      className="fixed w-[650px] h-[650px] rounded-full duration-100 -translate-x-full -translate-y-full bg-[rgb(255,255,255)] [background:radial-gradient(at_center,rgba(255,255,255,0.07)_25%,rgba(255,255,255,0)_70%)]"
    ></div>
  );
};

export default CursorLight;
