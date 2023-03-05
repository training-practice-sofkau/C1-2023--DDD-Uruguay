const IsTypeEmpleado = (type : string):boolean =>{
   
    enum Empleados {
        Entrenador,
        SegundoEntrenador,
        Negociador,
        Jugador,
        Directivo,
        Reclutador,
        Administrativo,
        Medico,
       
    }

    for(let i = 0; i<8 ;i++){
        if(type == Empleados[i]){
            return true;
        }
    }
    return false;
}