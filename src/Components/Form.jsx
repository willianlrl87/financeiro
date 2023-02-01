import * as styles from './styles';
import { Button } from './Button';

export const Form = () => {

    function handleSubmit(){

    }

    return(
        <styles.DivForm>
            <styles.Form onSubmit={handleSubmit}>
                <label htmlFor='description'>
                    Descrição:
                    <input type='text' id='description' />
                </label>

                <label htmlFor='value'>
                    Valor:
                    <input type='number' id='value' />
                </label>
                <div>
                    <label htmlFor='entrada'>
                        Entrada
                        <styles.Radio id='entrada' name='entradaSaida' />
                    </label>

                    <label htmlFor='saida'>
                        Saída
                        <styles.Radio id='saida' name='entradaSaida' />
                    </label>
                </div>
                <Button>Adicionar</Button>
            </styles.Form>
        </styles.DivForm>
    )
}