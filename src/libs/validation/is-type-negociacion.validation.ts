const IsTypeNegociacion = (type : string):boolean =>{
    enum Negociacion {
        Cesion,
        Traspaso,
        Contrato,
    }

    for(let i = 0; i<3 ;i++){
        if(type == Negociacion[i]){
            return true;
        }
    }
    return false;
}