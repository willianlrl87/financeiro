import React from 'react';
import OperationsContext from '../contexts/OperationsContext';
import * as styles from './styles';
import {FaArrowCircleDown, FaArrowCircleUp, FaDollarSign} from 'react-icons/fa';
import { useFormatInputAsNumber } from '../hooks/useFormatInputAsNumber';
import { useFormatInputAsText } from '../hooks/useFormatInputAsText';


export const Resume = ({title, resumeValue}) => {
    const {operationsRegistered, setOperationsRegistered} = React.useContext(OperationsContext);
    let sumValue = '0';
    function sum (operationsRegistered){
        console.log(operationsRegistered);
        
        sumValue = operationsRegistered.reduce((previousValue, currentValue) => {
            // let valueNumber = Number(useFormatInputAsNumber(currentValue.value));
            // console.log(`valueNumber ${typeof(valueNumber)} ${useFormatInputAsNumber(valueNumber)}`);
            // let valueNumber2 = Number(useFormatInputAsNumber(operation));
            // console.log(`valueNumber2 ${typeof(valueNumber2)} ${valueNumber2}`);
            console.log(`currentValue.value ${currentValue.value}`);
            let formattedCurrentValue = Number(useFormatInputAsNumber(currentValue.value));
            console.log(`formattedCurrentValue ${typeof(formattedCurrentValue)}`);
            return previousValue + formattedCurrentValue;
        },0);


        console.log(`sumValue ${typeof(sumValue)} ${sumValue}`);
        console.log(`Retorno total ${sumValue}`)
        return sumValue;
        

    }

    let total = useFormatInputAsText(sum(operationsRegistered));
    return (
        <React.Fragment>
            <styles.Resume>
                <styles.ResumeTitle>
                    <p>{title}</p>
                    {title.toLowerCase() == 'entradas' ? 
                        <FaArrowCircleUp color='green' /> : null}
    
                    {title.toLowerCase() == 'saídas' || title.toLowerCase() == 
                        'saidas' ? <FaArrowCircleDown color='red' /> : null}

                    {title.toLowerCase() == 'saldo' ? <FaDollarSign /> : null}
    
                </styles.ResumeTitle>
                <styles.ResumeValue>
                    <strong>{total}</strong>
                </styles.ResumeValue>
            </styles.Resume>
        </React.Fragment>
    )
}