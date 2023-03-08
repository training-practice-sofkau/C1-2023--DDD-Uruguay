const IsNacionalidad = (nacionalidad : string):boolean =>{
    enum Pais {
        Uruguay,
        Argentina,
        Brazil,
        Ecuador,
        Peru,
        Bolivia,
        Paraguay,
        Cuba,
        Chile,
        Colombia,
        Venezuela,
    }

    for(let i = 0; i<11 ;i++){
        if(nacionalidad == Pais[i]){
            return true;
        }
    }
    return false;
}