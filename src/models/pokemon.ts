export default class Pokemon {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    name: string;
    hp: number;
    cp: number;
    picture: string;
    types: Array<string>;
    created?: Date;
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     id: number,
     name: string = '...',
     hp: number = 100,
     cp: number = 10,
     //  picture: string = 'http://...',
     picture: string = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png',
     types: Array<string> = ['Normal'],
     created: Date = new Date()
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.name = name;
     this.hp = hp;
     this.cp = cp;
     this.picture = picture;
     this.types = types;
     this.created = created;
    }
   }