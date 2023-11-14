function Pokemon(tipo){
    this.tipo = tipo;
}

function Pikachu(tipo, forteContra, fracoContra){
    this.forteContra = forteContra;
    this.fracoContra = fracoContra;
    
    Pokemon.call(this, tipo);
}

function Charizard(tipo){
    Pikachu.call(this, tipo, "Grama", "Aquático");
}


const pikachuDoAsh = new Pikachu("Elétrico", "Aquático", "Rochoso");
const charizardDoAsh = new Charizard("Fogo");
const charizardDoDamian = new Charizard("Fogo");

console.log(pikachuDoAsh)
console.log(charizardDoAsh)
console.log(charizardDoDamian)