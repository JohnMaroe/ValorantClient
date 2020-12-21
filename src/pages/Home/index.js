import React from 'react';
import { Link, useParams } from 'react-router-dom';
import crypto from 'crypto';

import Clickables from '../../components/Clickables';
import DesktopIcon from '../../components/DesktopIcon';

import { Container, Main } from '../Login/styles';
import { HomeStyle } from './styles';

import riotLogo from '../../assets/riot_logo.png';
import valorantLogotype from '../../assets/vlr-logotype.png';

function Home() {
  let {username} = useParams();

  return (
    <Container>
      <DesktopIcon />

      <Main style={{backgroundSize: '99.7% 100%'}}>
        <HomeStyle>
          <header>
            <div>
              <h3>{username}</h3>
              <p>{'#' + crypto.randomBytes(2).toString('hex').toUpperCase()}</p>
            </div>
            <span><Link to="/">SIGN OUT</Link></span>
          </header>
          
          <main>
            <h1><a href="https://playvalorant.com/en-gb/" target="_blank">PLAY<i class="fas fa-play-circle"></i></a></h1>
          </main>

          <footer>
            <img src={riotLogo} alt="Riot Logo"/>
            <hr/>
            <img src={valorantLogotype} alt="Valorant Logotype"/>
          </footer>
        </HomeStyle>

        <div className="img-shadow" style={{boxShadow: '0 0 400px 165px rgba(0,0,0) inset', borderRadius: '8px'}}></div>

        <Clickables />

      </Main>
    </Container>
  );
}

export default Home;