'use strict';
class Pokemon {
    _name="";
    _type="";
    _evolutions= [];
    constructor(name, type, evolutions){
        this._name= name;
        this._type= type;
        this._evolutions=evolutions;
    }
    set name(value){
        this._name= value;
    }
    set type(value){
        this._type= value;
    }
    set evolutions(value){
        this._evolutions= value;
    }
    get name(){
        return this._name;
    }
    get type(){
        return this._type;
    }

    get evolution(){
        return this._evolutions;
    }
    attack(){
        return `${this._name}, está atacando`
    }
    evolve(evolution = 0){
        const EVOLVE=this._evolutions[evolution] || "";
        let mensaje = "no puedo evolucionar"
        if(EVOLVE){
            mensaje= `${this._name} está evolucionando a ${EVOLVE}`;
            this._name= EVOLVE;
        }
        return mensaje;
    }    
}

const charmander = new Pokemon('Charmander','Fuego',['Charmeleon', 'Charizard']);
console.log(charmander.name);
console.log(charmander.evolve());
console.log(charmander.attack());
