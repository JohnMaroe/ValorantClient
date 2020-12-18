import React from 'react';

import icon from '../../assets/vlr-logo-black.svg';

import { Container, Main, Form } from './styles';

function Login() {
  return (
    <Container>
      <Main>
        <Form>
          <header>
            <img src={icon} alt="Valorant Icon" />
            <i class="fas fa-question-circle"></i>
          </header>

          <section>
            <h2>Sign in</h2>

            <form action="">
              <div>
                <input type="text" id="username" className="input-box" />
                <label htmlFor="username" className="input-text">USERNAME</label>
              </div>

              <div>
                <input type="password" id="password" className="input-box" />
                <label htmlFor="password" className="input-text">PASSWORD</label>
              </div>

              <div>
                <input type="checkbox" id="checked" />
                <label htmlFor="checked" className><span></span>Stay logged in</label>
              </div>
              <button>arrow</button>
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

        <div className="img-container">
        </div>
      </Main>
    </Container>
  );
}

export default Login;