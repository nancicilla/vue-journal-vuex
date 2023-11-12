const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

const getDayMonthYear=(fechaString)=>{
    let fecha= new Date(fechaString)
    let dia,mes,anio;
    anio=`${fecha.getFullYear()} , ${days[fecha.getDay()]}`
    dia=fecha.getDate()
    mes=months[fecha.getMonth()]
    return {dia:dia,mes:mes,anio:anio}
   
}
export default getDayMonthYear