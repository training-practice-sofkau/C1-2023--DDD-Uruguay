export const IsValidFullname = (value: string): boolean => {

    let onlyLetters = /^[a-zA-Z]+$/;
    //checks if first char is a letter
    if (onlyLetters.test(value.charAt(0))) {
        return true;
    }
    return false;
}