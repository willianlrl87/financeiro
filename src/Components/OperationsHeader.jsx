import * as styles from './styles';
import {FaTrash} from 'react-icons/fa';

export const OperationsHeader = () => {

    return (
        <styles.OperationsHeaderDiv>
            <span>Descrição</span>
            <span className='operationValue'>Valor</span>
            <div>
                <span>Tipo</span>
                <i><FaTrash /></i>
            </div>
        </styles.OperationsHeaderDiv>
    )
}