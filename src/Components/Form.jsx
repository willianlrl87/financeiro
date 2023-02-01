import * as styles from './styles';
import { Button } from './Button';

export const Form = () => {

    function handleSubmit(){

    }

    return(
        <styles.DivForm>
            <styles.Form onSubmit={handleSubmit}>
                <styles.Label htmlFor='description'>
                    Descrição:
                    <input type='text' id='description' />
                </styles.Label>

                <styles.Label htmlFor='value'>
                    Valor:
                    <input type='number' id='value' />
                </styles.Label>
                <div>
                    <styles.Label htmlFor='entrada'>
                        Entrada
                        <styles.Radio id='entrada' name='entradaSaida' />
                    </styles.Label>

                    <styles.Label htmlFor='saida'>
                        Saída
                        <styles.Radio id='saida' name='entradaSaida' />
                    </styles.Label>
                </div>
                <Button>Adicionar</Button>
            </styles.Form>
        </styles.DivForm>
    )
}