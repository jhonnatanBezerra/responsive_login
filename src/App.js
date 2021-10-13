import { FaRegEnvelope, FaUser, FaLock, FaFacebookF, FaLinkedinIn, FaGoogle, FaTwitter } from 'react-icons/fa'
import log from '../src/Assets/Images/log.svg';
import register from '../src/Assets/Images/register.svg';

export const App = () => {
  return (
    <div className="container">
      <div className="forms-container">
        <section className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <div className="icon-wrapper">
                <FaUser />
              </div>
              <input type="text" placeholder="Username" />
            </div>

            <div className="input-field">
              <div className="icon-wrapper">
                <FaLock />
              </div>
              <input type="password" placeholder="Password" />
            </div>
            <button className="btn">Login</button>
            <p className="social-text">Or sign in with social platforms</p>
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
            <h2 className="title">Sign up</h2>

            <div className="input-field">
              <div className="icon-wrapper">
                <FaUser />
              </div>
              <input type="text" placeholder="Username" />
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
              <input type="password" placeholder="Password" />
            </div>
            <button className="btn">Sign up</button>
            <p className="social-text">Or sign up with social platforms</p>
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
            <h3>Now here ?</h3>
            <p>Lorem totam cupiditate modi itaque dicta molestiae,
              blanditiis ratione ?</p>
            <button className="btn transparent">Sign up </button>
          </div>
          <img className="image" src={log} alt="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Lorem totam cupiditate modi itaque dicta molestiae,
              blanditiis ratione ?</p>
            <button className="btn transparent">Sign in </button>
          </div>
          <img className="image" src={register} alt="image" />
        </div>

      </div>
    </div>
  );
}


