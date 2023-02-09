export const useFormatInputAsNumber = (value) => {
    console.log(`Parametro ${value}`);
    const valueString = toString(value);
    console.log(`string ${valueString}`);
    console.log(valueString);
    const formattedNumber = Number(value.replace(/\D/g,''));
    console.log(`useFormatInputAsNumber ${formattedNumber}`);
    return Number(formattedNumber);
}