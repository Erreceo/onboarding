import backgroundImage from "../assets/mountains-1412683.png";

const View = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-4 h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="lg:col-start-2 lg:col-span-2 lg:min-h-screen flex items-center justify-center p-12 lg:p-24 xl:p-48">
        <div className="flex-grow bg-gray-300 shadow-xl rounded-md border border-gray-300 p-8 bg-opacity-50">
          <h1>Login</h1>
          <input
            type="email"
            id="user"
            className="bg-white border border-gray-300 px-8 py-2 flex-1 w-full rounded-md mt-5 "
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            className="bg-white border border-gray-300 px-8 py-2 flex-1 w-full rounded-md mt-5"
            placeholder="Senha"
          />
          <div className="flex justify-center mt-5">
            <button
              type="button"
              className="bg-blue-600 px-8 py-2 rounded-md text-white hover:bg-blue-400"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
