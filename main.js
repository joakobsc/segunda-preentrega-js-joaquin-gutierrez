alert("Bienvenido, en este centro médico podrás encontrar médicos especialistas")
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
let especialidades = ["CARDIOLOGOS", "NEUROLOGOS", "PEDIATAS", "TRAUMATOLOGOS", "ENDOCRINOLOGOS"    ]

especialidades.forEach(
    function(i){
        alert(i.toLowerCase())
    }
)
let descripcion = prompt("ingresá la especialidad que buscas o el nombre del profesional").trim().toUpperCase()

if(descripcion = Number || descripcion==""){
alert("ingresá una especialidad valida por favor")
descripcion = prompt ("ingresá la especialidad que buscas o el nombre del profesional").trim().toUpperCase()
}

buscaUnProfesional()
function buscaUnProfesional() {
    
    
    alert("en la consola puedes observar los especialistas disponibles")
    let resultado = lista.filter((medico)=> medico.nombre.toUpperCase().includes(descripcion))
    let resultado2 = lista.filter((medico)=>medico.especialidad.toUpperCase().includes(descripcion))

    if(resultado.length > 0){
        console.table (resultado)
    }
    else if(resultado2.length >0){
        console.table (resultado2)
    }
    else{
        alert("no encontramos ninguna concidencia con la descripción, lo sentimos")
    }
}

