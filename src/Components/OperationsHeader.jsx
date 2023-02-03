import * as styles from './styles';
import {FaTrash, FaDollarSign } from 'react-icons/fa';

export const OperationsHeader = () => {

    return (
        <styles.OperationsHeaderDiv>
            <span>Descrição</span>
            <span className='operationValue'>Valor</span>
            <div>
                <i><FaDollarSign /></i>
                <i><FaTrash /></i>
            </div>
        </styles.OperationsHeaderDiv>
    )
}