import styled from 'styled-components';

export const Container = styled.div`
  font-size: 16px;
  padding: 0 10px 10px 10px;

  div.modal {
    display: flex;
    border-radius: 4px;
    background: #fff;
    padding: 10px;

    justify-content: space-between;

    div.modalLeft {
      display: flex;
      flex-direction: column;
      margin-right: 10px;

      text {
        margin: 10px 10px 10px 10px;
      }
      div.typeMaterialModal {
        display: flex;
        flex-direction: column;

        background: #ddd;
        border-radius: 4px;
        justify-content: center;
        align-items: center;
        padding: 15px 0 15px 0;

        div.iconsColeta {
          margin-top: 10px;
          img {
            width: 100px;
          }
        }
      }
    }

    img.modalRight {
      border-radius: 4px;
    }
  }
`;
