import React from 'react';
import { useParams } from "react-router-dom";

// import { Container } from './styles';

function Home() {
  let {username} = useParams();

  return (
    <h1>Look here - {username}</h1>
  );
}

export default Home;