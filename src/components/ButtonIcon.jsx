const ButtonIcon = ({ texto, icono, onClick=null, disabled=false }) => {
  return (
    <button
      className="w-fit flex justify-center items-center gap-x-3 px-6 py-4 rounded-xl bg-gray-900 hover:opacity-80 focus:opacity-80 duration-200"
      onClick={onClick}
      disabled={disabled}
    >
      <p className="text-white">{texto}</p>
      {icono}
    </button>
  );
};

export default ButtonIcon;
