import { useState } from 'react'
import backgroundImage from "../assets/sea.png";
import icon from "../assets/boatIcon.svg"
import Input from '../components/Input';
import Button from '../components/Button/index.tsx';
import axios from 'axios';

const View = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [erroLogin, setErroLogin] = useState(false);


  const validarEmail = () => {
    if (email.length === 0) return true;
    let usuario = email.substring(0, email.indexOf("@"));
    let dominio = email.substring(email.indexOf("@") + 1, email.length);

    if ((usuario.length >= 1) &&
      (dominio.length >= 3) &&
      (usuario.search("@") === -1) &&
      (usuario.search("@") === -1) &&
      (usuario.search(" ") === -1) &&
      (dominio.search(" ") === -1) &&
      (dominio.search(".") !== -1) &&
      (dominio.indexOf('.') >= 1) &&
      (dominio.lastIndexOf('.') < dominio.length - 1)
    ) {
      return true;
    } else {
      return false;
    }
  }

  const handleLogin = async () => {
    setLoading(true);
    setErroLogin(false);
    setEmailValid(validarEmail());

    if (emailValid) {
      try {
        const response = await axios.post(`http://localhost:6660/login`, {
          email,
          password
        });
        if (response.status === 200) {
          setLoading(false)
        } else {
          setLoading(false)
          setErroLogin(true)
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
        setErroLogin(true);
      }
    }
  }
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
                <img src={icon} alt="Desenho de um barco em preto e branco" className='object-contain h-36 w-42 translate-x-10 translate-y-2' />
              </div>
            </div>
            <Input
              type='email'
              placeholder='Email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              valid={emailValid}
            />
            <Input
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              valid={true}
            />
            <div className="flex justify-center mt-5">
              <Button id='login' loading={loading} onClick={handleLogin} error={erroLogin} errorMessage={'Usuário ou senha inválido'}>
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
