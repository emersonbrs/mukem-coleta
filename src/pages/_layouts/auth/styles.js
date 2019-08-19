import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #00cd66, #008b45);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 200px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    select {
      border: 5px;
      border-radius: 4px;
      opacity: 0.5;
      padding: 10px;
      margin: 0 0 10px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
    }

    span {
      color: #fff;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      width: 100%;
      text-align: center;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #eee9e9;
      font-weight: bold;
      color: #555;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#EEE9E9')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
