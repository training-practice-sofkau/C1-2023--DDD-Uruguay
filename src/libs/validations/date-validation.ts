export const isDateOk = (value : number ): boolean =>{

    const dateTest = new Date (value);

    //Verifico si la fecha es valida
    if (isNaN(dateTest.getTime()) || !/^\d{4}-\d{2}-\d{2}$/.test(dateTest.toISOString().substr(0, 10))) {

        return false;
    }
    
      return true;

    };
    

