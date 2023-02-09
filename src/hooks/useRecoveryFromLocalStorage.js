export const useRecoveryFromLocalStorage = (operationsRegistered) => {

    let localData = new Array ();

    if(localStorage.hasOwnProperty('operações')){
        localData = JSON.parse(localStorage.getItem('operações'));    
        // pesquisar como passar o setState como parametro de função
<<<<<<< HEAD

    }

=======

    }
    console.log(localData);

>>>>>>> parent of 3db1ad3 (LocalStorage concluído)
    return null;
}