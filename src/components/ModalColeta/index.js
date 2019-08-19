import React from 'react';
import { MdCloud, MdWatch, MdBrightness2, MdDeviceHub } from 'react-icons/md';
import { Container } from './styles';
import typeMaterialLogo from '~/assets/trash.jpg';

export default function ModalColeta() {
  return (
    <Container>
      <div className="modal">
        <div className="modalLeft">
          <text>
            <b>Status Doador:</b> Residência
          </text>
          <text>
            <b>Endereço:</b> Rua Dr. Paulo Sarmento
          </text>
          <div className="typeMaterialModal">
            <text>
              <b>Tipos de Material:</b>
            </text>
            <div className="iconsColeta">
              <MdCloud
                color="#7159c1"
                style={{ marginRight: '10px' }}
                size={20}
              />
              <MdWatch
                color="#7159c1"
                style={{ marginRight: '10px' }}
                size={20}
              />
              <MdBrightness2
                color="#7159c1"
                style={{ marginRight: '10px' }}
                size={20}
              />
              <MdDeviceHub
                color="#7159c1"
                style={{ marginRight: '10px' }}
                size={20}
              />
            </div>
          </div>
          <text>
            <b>Observação:</b> Campainha está quebrada, favor chamar.
          </text>
          <text>
            <b>Telefone:</b> (82) 99104-9240
          </text>
        </div>

        <img
          className="modalRight"
          style={{ width: '205px', background: '#000' }}
          src={typeMaterialLogo}
          alt=""
        />
      </div>
    </Container>
  );
}
