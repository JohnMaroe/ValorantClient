import React from 'react';

import { Container } from './styles';

function DesktopIcon() {
  function handleClick() {
    const container = document.querySelector(".sc-gsTCUz");
    container.style.display = "flex";

    const desktopicon = document.querySelector(".sc-eCssSg");
    desktopicon.style.transform = "scale(0)";
    desktopicon.style.transition = "ease 0.1";
  }

  return (
    <Container onDoubleClick={handleClick} />
  );
}

export default DesktopIcon;