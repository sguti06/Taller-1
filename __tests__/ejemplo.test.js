// LAS PRUEBAS UNITARIAS lo que hacen es testear las funciones

// 1. importar dependencias, servicios, funtiones
import suma from "../src/utils/ejemplo.js";


// 2. Definir un bloque de pruebas -> fn suma
/*
    PALABRAS RESERVADAS PARA HACER LAS PRUEBAS SON:
    Describe: Agrupar el bloque de prueba
    it: Define casos individuales de cada bloque de pruebas
    Expect - toBe: Que es lo que nosotros queremos que suceda -> definimos cual es la respuesta que debe de suceder
*/

describe("Probar la funcion suma", ()=>{
    // Este sera mi bloque de pruebas

        // Caso de prueba 1: Que se sumen números positivos
            // Primero, se describe que es lo que quiero que suceda
            // Segundo, definir que es lo que se espera que suceda
        it("Deberia sumar dos numeros positivos, correctamente",()=>{
            expect(suma(5,2)).toBe(7);
        });


        // Caso de prueba 1: Que se sumen números negativos
        it("Deberia sumar dos numeros negativos, correctamente",()=>{
            expect(suma(-2,-4)).toBe(-6);
        });

        
})