import { Ingrdient } from '../shared/ingrdient.model';

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingridients:Ingrdient[]
    public constructor(name:string,description:string,imagePath:string,ingridients:Ingrdient[]){
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
        this.ingridients=ingridients;
    }
}