import styled from 'styled-components';

export const AppHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    padding: 10px 20px;
    background-color: #00416A;
    color: #E4E5E6;
    position: absolute;
    top: 0;
    z-index: 1000;
    width: 100%;

    i {
        margin: 0 10px 0 20px;
        font-size: 24px;
    }
`;

export const ContentCard = styled.div`
    max-width: 400px;
    margin: -64px 20px 0;
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-size: 2.5em;
    color: #333;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    color: #666;
    font-size: 1.2em;
    margin-bottom: 30px;
`;

export const PlayButton = styled.button`
    padding: 10px 20px;
    font-size: 1.2em;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px 0;
    background-color: #333;
    color: #fff;
    font-size: 0.9em;
    text-align: center;
`;
