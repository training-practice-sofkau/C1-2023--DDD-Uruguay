export const StringSmallerThanMinLength = (value: string, minLength: number) : boolean =>{

    return value.length < minLength ? true : false;
}