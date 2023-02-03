import styled from 'styled-components';
import {backgrounds} from '../assets/constants';



export const Header = styled.h1`
    background-color: ${backgrounds.primary};
    height: 15vh;
    width: 100vw;
    text-align: center;
    @media(max-width: 768px){
        height: 10vh;
    }
`;

export const Label = styled.label`
    padding: 25px;
`;


export const ResumesDiv = styled.div`
    display: flex;
    width: 85vw;
    justify-content: space-between;
    
    @media(max-width: 768px){
        display: block;
        padding: 20px;

        div{
            margin-top: 10px;
        }
    }
`;

export const Resume = styled.div`
    width: object-fit;
    height: 15vh;
    margin: 0;
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

    @media(max-width: 768px){
        height: auto;
    }

`;

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    height: cover;
    
    @media(max-width: 768px){
        display: inline-block;

        input[type=number],
        input[type=text]{
            display: block;
            margin-bottom: 10px;
            
        }

        label{
            display: inline-block;
        }

    }
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


export const OperationsDiv = styled.div`
    background-color: ${backgrounds.secondary};
    width: 85vw;
    height: cover;
    margin-top: 40px;
    border-radius 10px;
`;

export const OperationsHeaderDiv =styled.div`
    display: flex;
    margin: 15px 20px;
    padding: 15px 0px;
    border-bottom: 1px solid #ccc;
    width: object-fit;

    @media(max-width: 768px){
        span{
            flex: 3;
            word-wrap: break-word;
        }

        div{
            flex: 1;
        }

        .operationValue{
            flex: 2;
        }
    }

`;

export const OperationRegisterDiv =styled.div`
    display: flex;
    margin: 15px 20px;
    padding: 15px 0px 15px 7px;
    width: object-fit;

    span{
        flex: 2;
    }

    div{
        display: flex;
        flex: 1;
    }

    i{
        padding-left: 8px;
    }

    @media(max-width: 768px){
        span{
            flex: 3;
            word-wrap: break-word;
        }

        div{
            flex: 1;
        }

        .operationValue{
            flex: 2;
        }
    }
`;