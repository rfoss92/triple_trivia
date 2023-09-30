import styled from 'styled-components';

export const ContentCard = styled.div`
    display: flex;
    flex-direction: column; 
    max-height: calc(100vh - 44px - 59px);
    max-width: 400px;
    margin: -56px 20px 0;
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
    display: block;
    margin-bottom: 12px;
    padding: 10px 20px;
    font-size: 1.2em;
    border: none;
    border-radius: 8px;
    background-color: #0367B4;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;
