const ContactInput = ({ id, name, texto, placeholder, valor, onChange }) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor={texto}
        className="absolute -top-3 left-4 bg-slate-50 text-sm text-gray-500 px-1"
      >
        {texto}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full h-full px-6 py-3 text-base font-light text-gray-900 border border-gray-300 rounded-2xl bg-slate-50 focus:border-gray-500 duration-200"
        value={valor}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default ContactInput;
