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
            var formattedValue = target.value.replace(/\D/g, '');
            if(target.value.length > 13) return null

            if(formattedValue.length >=6){
                formattedValue = formattedValue.replace(/(\d{1,3})(\d{3})(\d{2})/g, 'R$ $1.$2,$3');
            }else if(formattedValue.length >=4){
                formattedValue = formattedValue.replace(/(\d{2,3})(\d{2})/g, 'R$ $1,$2');
            }else if(formattedValue.length >=3){
                formattedValue = formattedValue.replace(/(\d{1})(\d{2})/g, 'R$ $1,$2');
            }

            console.log(formattedValue.length);
            setFormValue({...formValue, 'value': formattedValue});
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
                    <input type='text' id='value' name='value' value={formValue.value}
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