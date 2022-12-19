export const randomStrings = (length: number, count = 1, lowerCase = true, separator="\n", upperCase = false, numbers = false, symbols = false) => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let chars = "";
    if (lowerCase) chars += lowerCaseChars;
    if (upperCase) chars += upperCaseChars;
    if (numbers) chars += numbersChars;
    if (symbols) chars += symbolsChars;

    let result = "";
    for (let i = 0; i < count; i++) {
        let str = "";
        for (let j = 0; j < length; j++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        result += str + separator;
    }

    return result;
}

export const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomFloat = (min: number, max: number, decimalPlaces = 2) => {
    return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
}

