const View = ({type, id, placeholder}) =>
    <input
        type={type}
        id={id}
        className="bg-white border border-gray-300 px-8 py-2 flex-1 w-full rounded-md mt-5 "
        placeholder={placeholder}
    />
export default View;
