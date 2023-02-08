import { useRecoveryFromLocalStorage } from "./useRecoveryFromLocalStorage";

export const useSaveToLocalStorage = (operationsRegistered) => {

    // Se operationsRegistered ja possuir algo cadastrado, entao significa que 
    // ja passamos da fase de recovery dos dados 
    // do localStorage e podemos salvar direto no operationsRegistered
    if(operationsRegistered.length > 0){
        localStorage.setItem('operações', JSON.stringify(operationsRegistered));

    // Se operationsRegistered estiver vazio e localStorage tiver um length maior que 
    // dois caracteres ('[' e ']'), então significa que temos que puxar os dados 
    // salvos no localStorage para o operationsRegistered, pois a pagina foi recarregada 
    // e apagou o conteúdo operationsRegistered
    }else if(localStorage.hasOwnProperty('operações')
                && localStorage.getItem('operações').length > 2){
        useRecoveryFromLocalStorage(operationsRegistered); 

        // se localStorage e operationsRegistered estiverem vazios, 
        // então pode salvar normalmente
    }else{
        localStorage.setItem('operações', JSON.stringify(operationsRegistered));
    }
    

    return null;
}