function error (){
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
                    metisteLaPata
                    break
                }else
                    metisteLaPata
                    break
            }else
                error();
    
        
            break
    
        }else 
            error();
        
    
    }else 
        error();
}
