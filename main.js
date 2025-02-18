class generica{
    constructor (nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    detalhes(){
        return{
            nome: this.nome,
            idade: this.idade,
            tipo: this.tipo
        }
    };
        atacar() {
            let ataque;
        
            if (this.tipo === "Mago") {
                ataque = "magia";
            } else if (this.tipo === "Guerreiro"){
                ataque = "espada";
            } else if (this.tipo === "Monge"){
                ataque = "artes marciais";
            } else if (this.tipo === "Ninja"){
                ataque = "shuriken"
            } else{
                ataque = "Ataque desconhecido"
            }

        
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }    
}
    
let magoTime = new generica ("Livia", 17, "Mago")
let guerreiroTime = new generica ("Livia", 17, "Guerreiro")
let mongeTime = new generica ("Livia", 17, "Monge")
let ninjaTime = new generica ("Livia", 17, "Ninja")


magoTime.atacar()
guerreiroTime.atacar()
mongeTime.atacar()
ninjaTime.atacar()

