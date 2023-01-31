export const Form = () => {

    function handleSubmit(){

    }

    return(
        <form onSubmit={handleSubmit}>
            <label for='description'>
                Descrição:
                <input type='text' id='description' />
            </label>

            <label for='value'>
                Valor:
                <input type='number' id='value' />
            </label>

            <label for='entrada'>
                Entrada
                <input  type='radio' id='entrada' name='entradaSaida' />
            </label>

            <label for='saida'>
                Saída
                <input type='radio' id='saida' name='entradaSaida' />
            </label>
        </form>
    )
}