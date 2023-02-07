export const useFormatInputAsNumber = (value) => {
    const formattedNumber = Number(value.replace(/\D/g,''));
    return formattedNumber;
}