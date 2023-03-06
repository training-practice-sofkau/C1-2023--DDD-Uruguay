import { DateValueObject } from '../../subdomains/technical-service/contexts/customer-support/domain/value-objects/common/date/date.value-object';

export const IsValidDate = (value: number | Date | DateValueObject): boolean => {

    let dateToEvaluate!: Date;

    if(!value) return false;

    if(typeof value === 'number'){
        dateToEvaluate = new Date(value);        
    }
    else{
        dateToEvaluate = value as Date;
    }

    dateToEvaluate = formatDate(dateToEvaluate);
    
    if(valDate(dateToEvaluate)) return true;


    //TODO: hacer validacion para una fecha sea que se reciba un numero, una Date o un DateVO
    // evaluar si el regex anterior esta bien y que valida

    return false;
}


/**
 * Convert the date to a standar format (dd/mm/yyyy)
 * ( source: https://isotropic.co/how-to-format-a-date-as-dd-mm-yyyy-in-javascript/ )
 * @param {*} inputDate date to convert
 * @return {*} 
 */
function formatDate(inputDate) {
    let date, month, year;
  
    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();
  
      date = date
          .toString()
          .padStart(2, '0');
  
      month = month
          .toString()
          .padStart(2, '0');
  
    return  new Date(`${date}/${month}/${year}`);
  }


/**
 * Validates the formated Date also checks if there is a leap year
 * (source: https://www.scaler.com/topics/date-validation-in-javascript/)
 * 
 * @param {*} date date to evaluate
 * @return {*} true or false
 */
function valDate(date) {
    let dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;

    // Matching the date through regular expression      
    if (date.match(dateformat)) {

        let operator = date.split('/');

        // Extract the string into month, date and year      
        let datepart = [];
        
        if (operator.length > 1) {
            datepart = date.split('/');
        }

        let day = parseInt(datepart[0]);
        let month = parseInt(datepart[1]);
        let year = parseInt(datepart[2]);

        // Create a list of days of a month      
        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 1 || month > 2) {
            if (day > ListofDays[month - 1]) {
                //to check if the date is out of range
                //console.log("Invalid date")     
                return false;
            }
        } else if (month == 2) {
            let leapYear = false;
            if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
            if ((leapYear == false) && (day >= 29)) {
                console.log("Invalid date")
                return false;
            }
            else
                if ((leapYear == true) && (day > 29)) {
                    //console.log('Invalid date format!');
                    return false;
                }
        }
    } else {
        //console.log("Invalid date format!");
        return false;
    }
    return true;
}
