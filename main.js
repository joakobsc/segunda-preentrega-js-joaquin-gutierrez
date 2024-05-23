alert("Bienvenido, en este centro médico podrás encontrar médicos especialistas")
alert("A continuación verás nuestro equipo")
const Medico = function(nombre,especialidad,turnos){
    this.nombre= nombre,
    this.especialidad = especialidad
    this.turnos = turnos
}

let medico1= new Medico ("JUAN","CARDIOLOGIA","LUNES")
let medico2= new Medico ("GUSTAVO","NEUROLOGIA","LUNES")
let medico3= new Medico ("ANA","GINECOLOGIA","MARTES")
let medico4= new Medico ("EMANUEL","PEDIATRIA","VIERNES")
let medico5= new Medico ("SANDRA","CARDIOLOGIA","SABADO")
let medico6= new Medico ("JOAQUIN","TRAUMATOLOGIA","DOMINGO")
let medico7= new Medico ("MAXIMILIANO","ENDOCRINOLOGIA","MIERCOLES")

let lista = [medico1,medico2,medico3,medico4,medico5,medico6,medico7]
let especialidades = ["CARDIOLOGOS", "NEUROLOGOS", "PEDIATRAS", "TRAUMATOLOGOS", "ENDOCRINOLOGOS"]

lista.forEach(function(medico) {
    console.log(`Nombre: ${medico.nombre}, Especialidad: ${medico.especialidad}, Turnos: ${medico.turnos}`);
    alert(`Nombre: ${medico.nombre}\nEspecialidad: ${medico.especialidad}\nTurnos: ${medico.turnos}`);
});

let turnosConfirmados = []

function solicitarBusqueda(){
    while(true){
        let solicitarEspecialidad=prompt("Ingresá la especialidad que buscas o el nombre del profesional")
        if(solicitarEspecialidad !== null && solicitarEspecialidad.trim()!=="" && isNaN(solicitarEspecialidad)){
            return solicitarEspecialidad.trim().toUpperCase()
        }else{
            alert("Entrada no valida. Por favor ingresar el dato solicitado nuevamente")
        }
    }
}

let descripcion = solicitarBusqueda();


buscaUnProfesional()
function buscaUnProfesional() {
    
    

    let resultado = lista.filter((medico)=> medico.nombre.toUpperCase().includes(descripcion))
    let resultado2 = lista.filter((medico)=>medico.especialidad.toUpperCase().includes(descripcion))

    if(resultado.length > 0){
        console.table (resultado)
        alert("en la consola puedes observar los especialistas disponibles")
        sacarTurno(resultado);
    }
    else if(resultado2.length >0){
        console.table (resultado2)
        alert("en la consola puedes observar los especialistas disponibles")
        sacarTurno(resultado2);
    }
    else{
        alert("no encontramos ninguna concidencia con la descripción, lo sentimos")
    }
}




function sacarTurno(medicosFiltrados) {
    medicosFiltrados.forEach(function(medico) {
        let respuesta = confirm(`¿Quieres sacar turno con el Dr./Dra. ${medico.nombre} (${medico.especialidad}) que atiende los ${medico.turnos}?`);
        if (respuesta) {
            let nombrePaciente = prompt("Por favor ingrese su nombre")
            let obraSocial = prompt ("Ingrese su obra social") 
            let turnoConfirmado = {
                nombreMedico: medico.nombre,
                especialidad: medico.especialidad,
                turnos: medico.turnos,
                nombreUsuario: nombrePaciente,
                obraSocial: obraSocial,
                fecha: new Date().toLocaleDateString()  
            }
            turnosConfirmados.push(turnoConfirmado)
            alert(`Has sacado turno con el Dr./Dra. ${medico.nombre} (${medico.especialidad}) para el día ${medico.turnos}.`);
        }
    });

    if (turnosConfirmados.length > 0) {
        console.table(turnosConfirmados);
        alert("En la consola puedes ver los turnos confirmados.");
    }
}
function mostrarTurnosConfirmados() {
    if (turnosConfirmados.length > 0) {
        let detallesTurnos = turnosConfirmados.map(turno => {
            return `Paciente: ${turno.nombreUsuario} \n Médico: Dr./Dra. ${turno.nombreMedico}\n Especialidad: ${turno.especialidad}\n Día: ${turno.turnos}\n Obra Social: ${turno.obraSocial}\n Fecha de Confirmación: ${turno.fecha}`;
        });
        
        alert(detallesTurnos);
        console.table(detallesTurnos);
    } else {
        alert("No hay turnos confirmados.");
    }
}
mostrarTurnosConfirmados();