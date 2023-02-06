import * as styles from './styles';
import { Button } from './Button';
import FormContext from '../contexts/FormContext';
import OperationsContext from '../contexts/OperationsContext';
import {useContext} from 'react';
import { useShowAsMoney } from '../hooks/useShowAsMoney';

export const Form = () => {

    function handleSubmit(event){
        event.preventDefault();
        formValue.id = operationsRegistered.length;
        setOperationsRegistered([...operationsRegistered, formValue]);
    }

    function handleChange({target}){
        if(target.name == 'description'){
            setFormValue({...formValue, 'description': target.value});
        }
        if(target.name == 'value'){
            const formattedMoney = new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
                currencyDisplay: 'narrowSymbol',
            }).format(Number(target.value));


            setFormValue({...formValue, 'value': formattedMoney});
        }
        if(target.name == 'entradaSaida'){
            setFormValue({...formValue, 'type': target.id});
        }
    }

    const {formValue, setFormValue} = useContext(FormContext);
    const {operationsRegistered, setOperationsRegistered} = useContext(OperationsContext);

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
                    <input type='' id='value' name='value' value={formValue.value}
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