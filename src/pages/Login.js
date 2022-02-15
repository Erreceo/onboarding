import backgroundImage from "../assets/sea.png";
import icon from "../assets/boatIcon.svg"
import Input from '../components/Input';
import Button from '../components/Button';

const View = () => {
  return (
      <div className="bg-gradient-to-r from-orange-700 to-orange-100">
    <div
      className="grid grid-cols-1 lg:grid-cols-4 h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="lg:col-start-2 lg:col-span-2 lg:min-h-screen flex items-center justify-center p-12 lg:p-24 xl:p-48">
        <div className="flex-grow bg-gray-300 shadow-xl rounded-md border border-gray-300 p-8 bg-opacity-50">
          <div className="flex items-center justify-center">
            <div className="h-36 w-42 bg-gradient-to-r from-orange-500 to-orange-200 rounded-full">
              <img src={icon} alt="Desenho de um barco em preto e branco" className='object-contain h-36 w-42 translate-x-10 translate-y-2'/>
            </div>
          </div>
          <Input
            type='email'
            placeholder='Email'
            id='email'
          />
          <Input
            type="password"
            id="password"
            placeholder="Senha"
          />
          <div className="flex justify-center mt-5">
            <Button id='login'>
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default View;
