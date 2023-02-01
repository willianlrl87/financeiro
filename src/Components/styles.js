import styled from 'styled-components';
import {backgrounds} from '../assets/constants';



export const Header = styled.h1`
    background-color: ${backgrounds.primary};
    height: 15vh;
    width: 100vw;
    text-align: center;
`;

export const Label = styled.label`
    padding: 5px;
`;

export const ResumesDiv = styled.div`
    display: flex;
    width: 90vw;
    justify-content: space-between;
`;

export const Resume = styled.div`
    width: 25vw;
    height: 15vh;
    margin-top: -5vh;
    padding: 10px 20px;
    background-color: ${backgrounds.secondary};
    border-radius: 10px;
`;

export const ResumeTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
`;

export const ResumeValue = styled.strong`
    display: flex;
    height: 50%;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
`;

export const DivForm = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${backgrounds.secondary};
    width: 85vw;
    height: 100px;
    margin-top: 5vh;
    padding: 20px;
    border-radius: 10px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    height: cover;
`;

export const Radio = styled.input.attrs({type:'radio'})`
    margin: 0 5px;
    margin-right: 15px;
`;

export const AddButton = styled.button`
    background-color: ${backgrounds.button};
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: ${backgrounds.secondary};
    font-weight:bold;
    margin: 15px;
    height: 40px;
`;