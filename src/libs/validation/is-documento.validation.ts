const IsDocument = (documento: string):boolean =>{

    documento = "/^[1-9]\d{3,3}\d{3,3}[1-9]{1,1}$/";

    return documento != null ? true:false;
}