import React from 'react';
import { useParams } from 'react-router-dom';

import Clickables from '../../components/Clickables';
import { Container, Main } from './styles';

function Home() {
  let {username} = useParams();

  return (
    <Container>
      <Main>
        <Clickables />
        <div className="img-shadow"></div>
      </Main>
    </Container>
  );
}

export default Home;