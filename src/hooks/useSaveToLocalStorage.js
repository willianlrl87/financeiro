export const useSaveToLocalStorage = (operationsRegistered, setOperationsRegistered) => {
    // if(localStorage.hasOwnProperty('operação')){
    //     setOperationsRegistered(localStorage.getItem('operação'));
        
    // }
    localStorage.setItem('operações', JSON.stringify(operationsRegistered));

    return null;
}