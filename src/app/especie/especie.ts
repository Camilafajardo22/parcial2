export class Especie {
    id: number;
    name: string;
    scientific_name: string;
    feeding: string;
    global_distibution: string;

    constructor(id:number, name: string, scientific_name: string, feeding: string, global_distibution: string) {
        this.id = id;
        this.name = name;
        this.scientific_name = scientific_name;
        this.feeding = feeding;
        this.global_distibution = global_distibution;
    }
    
}
