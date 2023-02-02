import * as styles from './styles';
import { FaTrash, FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';
import OperationsContext from '../contexts/OperationsContext';
import {useState} from 'react';

export const OperationRegister = () => {
    const type='saida';
    const {operationsRegistered, setOperationsRegistered} = useState(OperationsContext);
    return (
            {operationsRegistered.map((operation) => {
                <styles.OperationRegisterDiv>
                    <span style={{flex:'2'}}>{operation.description}</span>
                    <span style={{flex:'2'}}>{operation.value}</span>
                    <div style={{display:'flex', flex: '1', justifyContent:'space-between'}}>
                        <span>{operation.type == 'entrada' ? <FaArrowCircleUp color='green'/> 
                            : <FaArrowCircleDown color='red' /> }</span>
                        <span><FaTrash /></span>
                    </div>
                </styles.OperationRegisterDiv>
            })
        }
    )
}