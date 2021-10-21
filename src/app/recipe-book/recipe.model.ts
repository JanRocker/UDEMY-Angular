export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name:string, desc:string, img_path:string) {
        this.name = name;
        this.description = desc;
        this.imagePath = img_path;
    }
}