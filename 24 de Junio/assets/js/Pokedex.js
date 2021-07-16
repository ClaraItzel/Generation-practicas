class Pokedex{
    getinfo(name){
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data =>{
            const [DATA= null]=data;
            const Message = DATA || `El pokemon ${name} no existe`
            console.log(Message);
        })
    }
    
    
}
const POKEDEX = new Pokedex();
POKEDEX.getinfo('machop');