export const useRecoveryFromLocalStorage = (operationsRegistered) => {

    let localData = new Array ();

    if(localStorage.hasOwnProperty('operações')){
        localData = JSON.parse(localStorage.getItem('operações'));    
        // pesquisar como passar o setState como parametro de função
<<<<<<< HEAD
<<<<<<< HEAD

    }

=======
=======
>>>>>>> parent of 3db1ad3 (LocalStorage concluído)

    }
    console.log(localData);

<<<<<<< HEAD
>>>>>>> parent of 3db1ad3 (LocalStorage concluído)
=======
>>>>>>> parent of 3db1ad3 (LocalStorage concluído)
    return null;
}