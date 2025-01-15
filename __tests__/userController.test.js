import supertest from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import { userModel } from "../src/models/users.model.js";

// Definicion de los bloques de prueba
describe("Pruebas de los controladores de los usuarios",()=>{

    /*
        Palabras reservadas:

        beforeEach: para ejecutar acciones que queramos que se hagan antes de cada prueba.
        afterAll: ejecuta acciones que queramos que se hagan al final de todas las peticiones.
    */

    // PARA LIMPIAR LA BASE DE DATOS ANTES DE CADA PRUEBA
    beforeEach(async ()=>{
        await userModel.deleteMany({}); //Esto es para borrar todo andes de la DB
    })

    // CERRAR LA CONEXION A MONGODB DESPUES DE TODAS LAS PRUEBAS
    afterAll(async()=>{
        await mongoose.connection.close();
    })

    const testUser = {
        fullName: "Kakaroto",
        email: "Kakaroto@ejemplo.com",
        password: "Goku"
    }
    

    // Definir el bloque de prueba para la peticion POST
    describe("Pruebas POST /users", ()=>{
        // Primer caso de pruebas: Crear un Usuario
        it("Deberia crear un usuario correctamente", async()=>{
            const res = await supertest(app).post("/usuarios").send(testUser)

            // ACA definimos que espero de esa respuesta
            expect(res.statusCode).toBe(201);
        });

        // Segundo caso de pruebas: Error si falta campo obligatorio
        it("Deberia devolver un error si falta un campo obligatorio", async()=>{
            const res = await supertest(app).post("/usuarios").send({email:testUser.fullName})

            // ACA definimos que espero de esa respuesta
            expect(res.body).toHaveProperty("mensaje", "Ocurrió un error al crear un usuario")
        });
    });

    // Definir el bloque de pruebas para la peticion GET
    describe("Pruebas Get /users", (async)=>{

        // PRIMER caso de prueba: Deberia indicar que no hay usuarios almacenados
        it("Deberia indicar que no hay usuarios almacenados", async()=>{
            const res = await supertest(app).get("/usuarios")

            // ACA definimos que espero de esa respuesta
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty("mensaje", "No hay usuarios almacenados")
        });


        // En dado caso que se vaya a probar que funcione la peticion get teniendo usuarios almacenados:
        //await new userModel{testUser}.save(); // se debe primero guardar un usuario
    });

});