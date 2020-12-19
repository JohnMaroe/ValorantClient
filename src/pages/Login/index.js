import React, { useState } from 'react';

import icon from '../../assets/vlr-logo-black.svg';
import grayArrow from '../../assets/gray-arrow.svg';
import whiteArrow from '../../assets/white-arrow.svg';
import { Link } from 'react-router-dom';

import { Container, Main, Form } from './styles';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleInput(e) {
    let value = e.target.value;
    if (e.target.type === 'text') {
      setUsername(value);
    } else if (e.target.type === 'password') {
      setPassword(value);
    }
  }

  return (
    <Container>
      <Main>
        <Form>
          <header>
            <img src={icon} alt="Valorant Icon" />
            <i className="fas fa-question-circle"></i>
            <div>
              You no longer need to select a region before signing in. 
              When you sign in, the region associated with your account will be patched automatically.
              <br /><br />
              If you're having trouble logging in, you may need to <strong>update your account</strong>. <strong>&#8599;</strong>
            </div>
          </header>

          <section>
            <h2>Sign in</h2>

            <form>
              <div>
                <input type="text" id="username" className="input-box" required onChange={handleInput} autoComplete="off" />
                <label htmlFor="username" className="input-text">USERNAME</label>
              </div>

              <div>
                <input type="password" id="password" className="input-box" required 
                  onChange={handleInput} autoComplete="off" readonly 
                  onfocus="this.removeAttribute('readonly');" 
                />
                <label htmlFor="password" className="input-text">PASSWORD</label>
              </div>

              <div>
                <input type="checkbox" id="checked" />
                <label htmlFor="checked"><div></div>Stay logged in</label>
              </div>
              
              {username != '' && password != '' ? 
                <button><Link to={`/home/${username}`}><img src={whiteArrow} alt="White Arrow" /></Link></button>
                : 
                <button disabled><img src={grayArrow} alt="Gray Arrow" /></button> 
              }
            </form>
          </section>

          <footer>
            <div>
              <span>CREATE ACCOUNT</span>
              <span>CAN'T SIGN IN?</span>
            </div>
            
            <span>V20.#.#</span>
          </footer> 
        </Form>

        <div className="img-shadow"></div>
        <div className="icons">
          <span>-</span>
          <span>?</span>
          <span>X</span>
        </div>
        <div className="config">
          <i class="fas fa-cog"></i>
        </div>
      </Main>
    </Container>
  );
}

export default Login;