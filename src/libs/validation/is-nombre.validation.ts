export const IsFullName = (fullName : string) =>{

    let regexFullName = /^[a-z ,.'-]+$/i

    if(regexFullName.test(fullName)){
        return true;
    }
    return false;
}