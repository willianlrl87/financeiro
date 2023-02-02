import * as styles from './styles';
import { OperationsHeader } from './OperationsHeader';
import { OperationRegister } from './OperationRegister';

export const Operations = () => {
    
    return (
        <styles.OperationsDiv>
            <OperationsHeader />
            <OperationRegister />
        </styles.OperationsDiv>
    )
}