
export const useShowAsMoney = (money) => {
    return money.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}