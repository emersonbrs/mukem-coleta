import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    flex-direction: column;

    div.divMaterial {
      display: flex;
      flex-direction: column;
      border: 0;
      background: #008b45;
      border-radius: 4px;
      font-size: 20px;
      font-weight: normal;
      color: #000;

      div.divInfo {
        display: flex;
        flex-direction: row;
        border: 0;
        border-radius: 4px;
        margin: 10px;
        justify-content: space-between;

        div.bodyInfo {
          display: flex;
          border-radius: 4px;
          width: 100%;
          background: #fff;
          margin-right: 10px;
          flex-direction: row;
          justify-content: space-between;
          font-size: 14px;

          button.buttonInfo {
            border: 0;
            border-radius: 4px;
            background: #6495ed;
            margin: 10px 10px 10px 0;
            padding: 10px;

            strong {
              color: #fff;
            }
          }

          div.textColeta {
            display: flex;
            width: 100%;
            margin-right: 10px;
            justify-content: center;
            align-items: center;
            padding: 10px 0 10px 10px;
            font-size: 16px;
          }
        }
      }

      button.buttonCheckTrash {
        display: block;
        justify-content: center;
        width: 200px;
        border: 0;
        border-radius: 4px;
        background: #0000cd;
        color: #fff;
      }

      div.buttonCheckTrashGoing {
        display: flex;
        font-size: 14px;
        justify-content: center;
        align-items: center;
        border: 0;
        border-radius: 4px;
        background: #ffd700;
        color: #1c1c1c;
        padding: 0 10px 0 10px;
      }
    }

    li {
      margin: 10px 0;
    }
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
