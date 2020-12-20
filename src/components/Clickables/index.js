import React from 'react';

import { Click } from './styles';

function Clickables() {
  function handleClick() {
    const container = document.querySelector(".sc-gsTCUz");
    container.style.transform = "scale(0)";
    container.style.transition = "ease 0.6s";

    const desktopicon = document.querySelector(".sc-eCssSg");
    desktopicon.style.transform = "scale(1)";
    desktopicon.style.transition = "ease 0.1";
  }

  return (
    <Click>
      <div className="icons">
        <div onClick={handleClick}>-</div>
        <div>?</div>
        <div onClick={handleClick}>X</div>
      </div>
      <div className="config">
        <i className="fas fa-cog"></i>
      </div>
    </Click>
  );
}

export default Clickables;