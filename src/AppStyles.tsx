import styled from 'styled-components';

export const AppContainer = styled.footer`
    text-align: center;
    padding: 50px 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #E4E5E6, #00416A);
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AppHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    padding: 10px 0;
    background-color: #00416A;
    color: #E4E5E6;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;

    i {
        margin: 0 10px 0 20px;
        font-size: 24px;
    }
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: #333;
    color: #fff;
    font-size: 0.9em;
    text-align: center;
`;