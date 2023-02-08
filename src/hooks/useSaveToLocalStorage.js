export const useSaveToLocalStorage = (operationsRegistered) => {

    localStorage.setItem('operações', JSON.stringify(operationsRegistered));
    
    return null;
}