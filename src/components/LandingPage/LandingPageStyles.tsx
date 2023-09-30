import styled from 'styled-components';

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
