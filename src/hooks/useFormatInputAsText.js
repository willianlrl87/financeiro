export const useFormatInputAsText = (target) => { 

    var formattedValue = target.value.replace(/\D/g, '');

    if(formattedValue.length >=6){
        formattedValue = formattedValue.replace(/(\d{1,3})(\d{3})(\d{2})/g, 'R$ $1.$2,$3');
    }else if(formattedValue.length >=4){
        formattedValue = formattedValue.replace(/(\d{2,3})(\d{2})/g, 'R$ $1,$2');
    }else if(formattedValue.length >=3){
        formattedValue = formattedValue.replace(/(\d{1})(\d{2})/g, 'R$ $1,$2');
    }
    
    return formattedValue;
}