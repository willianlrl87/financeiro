
export const useRecoveryFromLocalStorage = (operationsRegistered) => {
    let localData = new Array ();

    if(localStorage.hasOwnProperty('operações')){
        localData = JSON.parse(localStorage.getItem('operações'));    
    }
    console.log(localData);

    return localData;
}