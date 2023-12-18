/* function error (){
    alert("¡Oops, parece que ha habido un error en el sistema! Por favor, aguarde al pendiente que ya hay un destacamento del Miniluv yendo a su casa. ¡No se preocupe, sabemos su direccion!");
}

function metisteLaPata (){
    alert (`Querido ${nombre}, lamentablemente he de informale que hemos detectado anomalías en el funcionamiento de las instalaciones de su domicilio, ¡pero no se preocupe! Por suerte, ya hay un equipo de Policías del Pensamiento en camino. ¡Ellos se encargarán de erradicar el problema! Le pedimos que aguarde pacientemente y que no se preocupe, ya tenemos su direccion.`);
    
}

let nombre= prompt("Como te llamas?");

while (nombre != "0"){
    alert (`Bienvenido, ${nombre}`);
    let juego = prompt(`Por sí o por no, ${nombre}, ¿querés jugar a un juego? `).toLowerCase();
    if (juego == "si" ){
        alert ("¡Que bueno! Empecemos. Por favor, apretá enter para continuar.");
        let cuenta = prompt("Por sí o por no, 2 + 2 = 5? (Contenido monitoreado por el Miniver)") .toLowerCase();
        
        if (cuenta == "si"){
            let amor = prompt("¡Perfecto! Sigamos. Otra vez por sí o por no, ¿amás al Gran Hermano?") .toLowerCase();
            
            if (amor == "si"){
                alert(`¡Es usted, ${nombre}, un gran ciudadano! El Partido Único está orgulloso de contar con su servicio. ¡Aprete la tecla enter una vez más para jugar a nuestro último juego!`);
                let libro = prompt(`Bueno, ${nombre}, espero que lo hayas pasado bien, ¡pues este es nuestro último juego! Como siempre, la pregunta es por sí o por no: ¿Has leido el libro de Goldwing?`).toLowerCase();
                
                if (libro == "si"){
                    metisteLaPata();
                    
                }else
                    metisteLaPata();
                    
            }else
                error();
    
        
            break
    
        }else 
            error();
        
    
    }else 
        error();
}
 */



const facciones = [
    {nombre : "Corsarios" , descripcion : "Los Corsarios son lo único que queda de las diferentes civilizaciones que habitaban en el sector Lambda, que quedó completamente diezmado luego de la última incursión del Imperio Astarl. Una vez que el imperio logró dar a luz a su más terrible creación, la Égida, volvió toda su atención hacia el sector que más probleas le traía en lo diplomáticopuesto que siempre pugnaron por conservar su independencia; el resultado fue catastrófico. De lo que antaño fue un conjunto de civilizaciones diferentes, unidas sólo por el comercio y la búsqueda del progreso mutuo, queda una carcasa vacía en un rejunte de individualidades y caudillos, que anhelan tiempos que hoy causan nostalgia y no poca cantidad de odio y resentimiento." , naves : "Cazador ligero y "},
    {nombre : "Tol'onthor" , descripcion : "Los Tol'onthor son una raza alienígena antropomorfa. Puede que a simple vista parezcan humanos normales, si acaso uno decide pasar por alto su piel negra con vetas verdes, pero lo cierto es que su capacidad intelectual supera con creces la del humano promedio; su único inconveniente es su ínfima tasa de natalidad (lo cual quizás se deba al hecho de que pasan tanto tiempo pensando). Esta facción siempre ha tenido sus escollos con el Imperio, pero éste último nunca acordó en iniciar un conflicto armado a gran escala puesto que les resulta imprescindible el capital intelectual de dicha especie. Luego de los sucesos acontecidos en el sector Lambda, sin ebargo, los Tol'onthor se han tomado un largo tiempo para deliberar y finalmente decidieron que era momento de pasar a la acción." , naves : "Cazador ligero y "},
    {nombre : "Imperio Astar" , descripcion : "Lo que hace ya casi mil años comenzó con la sublevación de un Señor de la Guerra, hoy es una intrincada red de gobierno que atravieza la mayor parte de la galaxia. El imperio pudo establecerse, en un principio, por medio de la implementación de la fuerza, para luego mantener su legitimidad gracias a un brillante y prolífero plan económico que se extiende hacia los confines de su territorio. Pero su época dorada pasó hace ya mucho tiempo y hoy en día se ve obligado a afrontar crisis políticas por doquier. Frente a este problema, los altos mandos, miembros del consejo de los Patricios, han decidido relocar el grueso de los recursos imperiales en la construcción del imperio perfecto, la esperanza final de un imperio decadente. Así fue como nació la Égida, un nave monuental, del tamaño de una pequeña luna. Resulta preciso que sea tan grande ya que su único destino es el de portar con un cañón de gravitón. Luego de su implementación en el sector Lambda, los augures imperiales vaticinan una nueva edad de oro." },
    {naves : "La Égida es una nave colosal, un leviatán que surca lenta y metódicamente el vacío espacial hasta llegar a su destino. Tiene al rededor de 2800km de diámetro y sólo para mantener su funcionamiento básico hacen falta 150 millones de personas, aunque puede albergar el doble en sus espacios habitables, que se reparten entre los civiles que se encargan de llevar a cabo todas las tareas no militares y a un conjunto de pelotones que se encuentran siempre a la orden para desplegar sus flotas que se hallan estacionadas en el hangar. Para quien tuvo la suerte de no verla nunca, hay que imaginársela como una estrella, donde cada una de las puntas son enormes alas de kilometros de extensión en cuyos extremos se alojan enormes generadores de energía que se conectan con el centro mediante cables tan grandes como edificios. Cuando los generadores se encienden para cargar de energía al cañón, estos emiten una incesante y gigantezca cantidad de luz, haciendo que la nave brille como una estrella de seis puntas. Siete una vez cargado el cañón de gravitón. Es éste un artefacto descomunal, tan masivo que su longitud recorre la altura total de la nave, de arriba a abajo. Mediante la presurización de enormes cantidades de energía, los ingenieros dieron con una manera de controlar a su voluntad las particulas de gravitón, responsables de la gravedad; cuando se dispara, emite un rayo continuo que aloja en un lugar específico del espacio, creando un bolsillo de gravedad artificial, atrayendo todo lo que entre en su órbita. Dicen que si el objetivo fuera una estrella viva, las repercuciones de tal impacto serían apocalípticas para el sistema; si, en cambio, llegara a apuntar hacia un planeta... bueno, digamos que no quisieras que fuera el tuyo. "},
];


// Crear usuario // 
let userId = 1;
let usuarios = [];

class Usuario {
    constructor (nombre, email, faccion){
        this.nombre = nombre;
        this.email = email;
        this.faccion = faccion;
        this.id = userId;
    }
}

const agregarUsuario = (usuario) =>{
    usuarios.push(usuario);
    userId++
}



const mostrarUsuarios = () => {
    let nombresUsuarios = usuarios.map( usuario => `Nombre: ${usuario.nombre} - Faccion: ${usuario.faccion} - Email: ${usuario.email}` );
    
    if(nombresUsuarios.length > 0) {
        alert(nombresUsuarios.join("\n"));
    } else {
        alert("No hay usuarios registrados");
    }
};


/// fin usuario ///

// Menu de facciones //

const menuFacciones = () =>{
    let estado = true;

    while (estado) {
        let opciones = parseInt (
                            prompt (`
                                1 - Corsarios
                                2 - Tol'onthor
                                3 - Imperio Astarl
                                4 - volver
                                `)
                            );
        switch(opciones){
            case 1:
                alert(facciones[0].descripcion);
                menuFacciones();
                break;
            
            case 2:
                alert(facciones[1].descripcion);
                menuFacciones();
                break;
            
            case 3:
                let imperio = parseInt (
                    prompt (`Lo que hace ya casi mil años comenzó con la sublevación de un Señor de la Guerra, hoy es una intrincada red de gobierno que atravieza la mayor parte de la galaxia. El imperio pudo establecerse, en un principio, por medio de la implementación de la fuerza, para luego mantener su legitimidad gracias a un brillante y prolífero plan económico que se extiende hacia los confines de su territorio. Pero su época dorada pasó hace ya mucho tiempo y hoy en día se ve obligado a afrontar crisis políticas por doquier. Frente a este problema, los altos mandos, miembros del consejo de los Patricios, han decidido relocar el grueso de los recursos imperiales en la construcción del imperio perfecto, la esperanza final de un imperio decadente. Así fue como nació la Égida, un nave monuental, del tamaño de una pequeña luna. Resulta preciso que sea tan grande ya que su único destino es el de portar con un cañón de gravitón. Luego de su implementación en el sector Lambda, los augures imperiales vaticinan una nueva edad de oro.
                            1 - Égida
                            2 - volver 
                        `)
                    );
                switch  (imperio){ 
                    case 1:
                        alert(facciones[3].naves)
                        
                        break;
                    
                    case 2:
                        menuFacciones();
                        break;
                }
                menuFacciones();
                break;

            case 4:
                menuPrincipal();
                break;
            
            default:
                alert("Introduzca una opcion valida.");
        }
    }
}
/* menuFacciones(); */
// fin menu facciones //

// Menu de Usuario //


/* const mostrarUsuarios = () => {
    let nombresUsuarios = usuarios.map( usuarios => `Nombre de usuario: ${usuarios.nombre} - Faccion: ${usuarios.faccion}` );
    // verificar si hay elementos en el array 
    if(nombresUsuarios.length > 0) {
        alert(nombresUsuarios.join("\n"));
    } else {
        alert("No hay usuarios registrados");
    }
}; */



const menuPrincipal = () => {
    let encendido = true;
    
    while (encendido) {
        let opciones = parseInt (
                            prompt (`Bienvenidos al simulador de batallas espaciales mas grande de latinoamerica. Registrate para comenzar! Si es tu primera vez, recomendamos que antes eches un vistazo a cada una de las facciones
                                    1 - Crear cuenta.
                                    2 - Facciones.
                                    3 - Mostrar datos de mi cuenta.
                                    4 - Salir.
                                    `)
                                );
        switch (opciones) {
            case 1:
                let nombre = prompt("Ingrese su nombre de usuario")
                let email = prompt("Ingrese su email.")
                let faccion = prompt ("Ingrese que faccion elige.")
                let usuario = new Usuario(nombre, email, faccion);
                agregarUsuario(usuario);
                break;
                
            case 2:
                menuFacciones();
                break;

            case 3:
                mostrarUsuarios();
                break;

            case 4:
                encendido = false
                break;

            default:
                alert("Ingrese una opcion valida.")
        }
    }
}

menuPrincipal();