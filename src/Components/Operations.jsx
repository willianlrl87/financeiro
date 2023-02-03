import * as styles from './styles';
import { OperationsHeader } from './OperationsHeader';
import { OperationRegister } from './OperationRegister';
import {useState, useContext} from 'react';
import OperationsContext from '../contexts/OperationsContext';

export const Operations = () => {
    
    const {operationsRegistered, setOperationsRegistered} = useContext(OperationsContext);

    return (
        <styles.OperationsDiv>
            <OperationsHeader />
            <OperationsContext.Provider value={{operationsRegistered, setOperationsRegistered}}>
                <OperationRegister />
            </OperationsContext.Provider>
        </styles.OperationsDiv>
    )
}