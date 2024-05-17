import { Especie } from "./especie";

export class EspecieDetail extends Especie{
    
    description= '';
    image= '';
    constructor(id:number, name: string, scientific_name: string, feeding: string, global_distibution: string, description: string, image: string) {
        super(id, name, scientific_name, feeding, global_distibution);
        this.description = description;
        this.image = image;
    }
}
