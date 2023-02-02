import * as styles from './styles';
import {FaTrash} from 'react-icons/fa';

export const OperationsHeader = () => {

    return (
        <styles.OperationsHeaderDiv>
            <span style={{flex:'2'}}>Descrição</span>
            <span style={{flex:'2'}}>Valor</span>
            <div style={{display:'flex', flex: '1', justifyContent:'space-between'}}>
                <span>Tipo</span>
                <span><FaTrash /></span>
            </div>
        </styles.OperationsHeaderDiv>
    )
}