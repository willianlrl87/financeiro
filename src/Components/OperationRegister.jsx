import * as styles from './styles';
import { FaTrash, FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';
import OperationsContext from '../contexts/OperationsContext';
import {useState, useContext, Fragment} from 'react';

export const OperationRegister = () => {
    const {operationsRegistered, setOperationsRegistered} = useContext(OperationsContext);
    
    const resultToRender = operationsRegistered.map((operation) => {
        return(
            <styles.OperationRegisterDiv key={operation.id}>
                <span key='teste' style={{flex:'2'}}>{operation.description}</span>
                <span style={{flex:'2'}}>{operation.value}</span>
                <div style={{display:'flex', flex: '1', justifyContent:'space-between'}}>
                    <span>{operation.type == 'entrada' ? <FaArrowCircleUp color='green'/> 
                        : <FaArrowCircleDown color='red' /> }</span>
                    <span><FaTrash /></span>
                </div>
            </styles.OperationRegisterDiv>
        )
    });
    
    return (
        <Fragment>{resultToRender}</Fragment>
    )
}