import React, { useState } from 'react';

import icon from '../../assets/vlr-logo-black.svg';
import grayArrow from '../../assets/gray-arrow.svg';
import whiteArrow from '../../assets/white-arrow.svg';

import { Container, Main, Form } from './styles';

import Clickables from '../../components/Clickables';
import DesktopIcon from '../../components/DesktopIcon';

function Login(props) {
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

  function handleLogin(e) {
    if (username && password) {
      props.history.push(`/home/${username}`);
    } else {
      e.preventDefault();
    }
  }

  return (
    <Container>
      <DesktopIcon />

      <Main>
        <Form onSubmit={handleLogin}>
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
                  onChange={handleInput} autoComplete="off"
                />
                <label htmlFor="password" className="input-text">PASSWORD</label>
              </div>

              <div>
                <input type="checkbox" id="checked" />
                <label htmlFor="checked"><div></div>Stay logged in</label>
              </div>
              
              {username !== '' && password !== '' ? 
                <button type="submit"><img src={whiteArrow} alt="White Arrow" /></button>
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

        <Clickables />
        
      </Main>
    </Container>
  );
}

export default Login;