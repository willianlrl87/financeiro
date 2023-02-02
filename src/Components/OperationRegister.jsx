import * as styles from './styles';
import { FaTrash, FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';

export const OperationRegister = () => {
    const type='entrada';
    return (
        <styles.OperationRegisterDiv>
            <span style={{flex:'2'}}>description ashdjahdkj2hadkahdkahdskjahsdkrj</span>
            <span style={{flex:'2'}}>value</span>
            <div style={{display:'flex', flex: '1', justifyContent:'space-between'}}>
                <span>{type == 'entrada' ? <FaArrowCircleUp color='green'/> 
                    : <FaArrowCircleDown color='red' /> }</span>
                <span><FaTrash /></span>
            </div>
        </styles.OperationRegisterDiv>
    )
}