import { useState } from 'react';
import { FaRegEnvelope, FaUser, FaLock, FaFacebookF, FaLinkedinIn, FaGoogle, FaTwitter } from 'react-icons/fa'
import log from '../src/Assets/Images/log.svg';
import register from '../src/Assets/Images/register.svg';

export const App = () => {

  const [changeMode, setChangeMode] = useState(false);

  const changeLoginToRegister = () => {
    setChangeMode(!changeMode);
  }

  return (
    <div className={`container ${changeMode ? 'sign-up-mode' : 'sign-in-mode'}`}>
      <div className="forms-container">
        <section className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Entrar</h2>

            <div className="input-field">
              <div className="icon-wrapper">
                <FaUser />
              </div>
              <input type="text" placeholder="Usuário" />
            </div>

            <div className="input-field">
              <div className="icon-wrapper">
                <FaLock />
              </div>
              <input type="password" placeholder="Senha" />
            </div>
            <button className="btn">Login</button>
            <p className="social-text">Ou login com mídias sociais</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaGoogle />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </form>

          <form action="" className="sign-up-form">
            <h2 className="title">Inscreva-se</h2>

            <div className="input-field">
              <div className="icon-wrapper">
                <FaUser />
              </div>
              <input type="text" placeholder="Usuário" />
            </div>

            <div className="input-field">
              <div className="icon-wrapper">
                <FaRegEnvelope />
              </div>
              <input type="text" placeholder="E-mail" />
            </div>

            <div className="input-field">
              <div className="icon-wrapper">
                <FaLock />
              </div>
              <input type="password" placeholder="Senha" />
            </div>
            <button className="btn">Registrar</button>
            <p className="social-text">Ou registre-se com mídias sociais</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaGoogle />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </form>


        </section>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Novo por aqui ?</h3>
            <p>Registre-se é grátis !</p>
            <button onClick={changeLoginToRegister} className="btn transparent">Registrar-se</button>
          </div>
          <img className="image" src={log} alt="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Já possui uma conta ?</h3>
            <p>Realize login para continuar</p>
            <button onClick={changeLoginToRegister} className="btn transparent">Entrar</button>
          </div>
          <img className="image" src={register} alt="image" />
        </div>

      </div>
    </div>
  );
}


