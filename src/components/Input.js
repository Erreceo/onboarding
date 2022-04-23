const View = ({ type, id, placeholder, onChange, valid = true }) =>
  <input
    type={type}
    id={id}
    className={`bg-white border ${valid === true ? "border-gray-300" : "border-red-500 border-2"} px-8 py-2 flex-1 w-full rounded-md mt-5 ${valid ? "" : ""}`}
    placeholder={placeholder}
    onChange={onChange}

  />
export default View;
