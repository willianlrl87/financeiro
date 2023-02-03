import * as styles from './styles';
import { FaTrash, FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';
import OperationsContext from '../contexts/OperationsContext';
import {useState, useContext, Fragment} from 'react';

export const OperationRegister = () => {
    const {operationsRegistered, setOperationsRegistered} = useContext(OperationsContext);
    
    const resultToRender = operationsRegistered.map((operation) => {
        return(
            <styles.OperationRegisterDiv key={operation.id}>
                <span>{operation.description}</span>
                <span className='operationValue'>{operation.value}</span>
                <div>
                    <i>{operation.type == 'entrada' ? <FaArrowCircleUp color='green'/> 
                        : <FaArrowCircleDown color='red' /> }</i>
                    <i><FaTrash /></i>
                </div>
            </styles.OperationRegisterDiv>
        )
    });
    
    return (
        <Fragment>{resultToRender}</Fragment>
    )
}