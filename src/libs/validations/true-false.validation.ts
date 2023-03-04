export const IsBoolean = (value: boolean): boolean => {

    if(typeof(value) == 'boolean')
    {
        return true
    }

    return false;
}