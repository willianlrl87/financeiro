import * as styles from './styles';
import { Button } from './Button';
import FormContext from '../contexts/FormContext';
import OperationsContext from '../contexts/OperationsContext';
import {useContext, useEffect} from 'react';
import {useFormatInputAsText} from '../hooks/useFormatInputAsText';
import { useSaveToLocalStorage } from '../hooks/useSaveToLocalStorage'
import { useRecoveryFromLocalStorage } from '../hooks/useRecoveryFromLocalStorage';

export const Form = () => {
    const {formValue, setFormValue} = useContext(FormContext);
    const {operationsRegistered, setOperationsRegistered} = useContext(OperationsContext);

    function handleChange({target}){
        const formattedValue = useFormatInputAsText(target);
        if(target.name == 'description'){
            setFormValue({...formValue, 'description': target.value});
        }
        if(target.name == 'value'){
            setFormValue({...formValue, 'value': formattedValue});
        }
        if(target.name == 'entradaSaida'){
            setFormValue({...formValue, 'type': target.id});
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        formValue.id = operationsRegistered.length;
        setOperationsRegistered([...operationsRegistered, formValue]);
    }
    
    useEffect(() => {
        useRecoveryFromLocalStorage(operationsRegistered);
    },[]);

    useEffect(() => {
        useSaveToLocalStorage(operationsRegistered);
        useRecoveryFromLocalStorage();
    },[operationsRegistered]);


    return(
        <styles.DivForm>
            <styles.Form onSubmit={handleSubmit}>
                <styles.Label htmlFor='description'>
                    Descrição:
                    <input type='text' id='description' value={formValue.description}
                         name='description' onChange={handleChange} required />
                </styles.Label>

                <styles.Label htmlFor='value'>
                    Valor:
                    <input type='text' maxLength='13' id='value' name='value' value={formValue.value}
                        onChange={handleChange} required />
                </styles.Label>
                <div>
                    <styles.Label htmlFor='entrada'>
                        Entrada
                        <styles.Radio id='entrada' name='entradaSaida' required 
                            value={formValue.type} onChange={handleChange} />
                    </styles.Label>

                    <styles.Label htmlFor='saida'>
                        Saída
                        <styles.Radio id='saida' name='entradaSaida' 
                            value={formValue.type} onChange={handleChange} />
                    </styles.Label>
                </div>
                <Button>Adicionar</Button>
            </styles.Form>
        </styles.DivForm>
    )
}