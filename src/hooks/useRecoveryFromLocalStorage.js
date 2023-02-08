export const useRecoveryFromLocalStorage = (operationsRegistered) => {

    let localData = new Array ();

    if(localStorage.hasOwnProperty('operações')){
        localData = JSON.parse(localStorage.getItem('operações'));    
        // pesquisar como passar o setState como parametro de função

    }
    console.log(localData);

    return null;
}