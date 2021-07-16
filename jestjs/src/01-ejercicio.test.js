const getObjectDescription= require("./01-ejercicio.js")
describe('Eeste es una prueba para la funcion de object description y el objeto', () => {
    
    
    test('La opcion Object debe existir ', ()=>{
        expect(getObjectDescription).toBeTruthy();
    });
});
 