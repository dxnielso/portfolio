const Container = ({ children, id="", titulo="" }) => {
  return (
    <section className="w-full lg:py-20 flex flex-col justify-center items-center sm:px-24 lg:px-40 xl:px-40 overflow-hidden" id={id}>
      <h2 className="text-2xl font-bold text-gray-900 mb-2 uppercase">{titulo}</h2>
      <div className="w-14 h-[3px] bg-gray-900 mb-8"></div>
      {children}
    </section>
  );
};

export default Container;
